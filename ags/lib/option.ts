import { Variable } from 'resource:///com/github/Aylur/ags/variable.js';
import { wait } from './utils';
import options from 'options';

type AgsOptionProps = {
  persistent?: boolean;
};

export class AgsOption<T = unknown> extends Variable<T> {
  initial: T;
  persistent: boolean;
  id = '';

  static {
    Service.register(this);
  }

  constructor(initial: T, { persistent = false }: AgsOptionProps = {}) {
    super(initial);
    this.initial = initial;
    this.persistent = persistent;
  }

  toString() {
    return `${this.value}`;
  }

  toJSON() {
    return `agsOption:${this.value}`;
  }

  init(cacheFile: string) {
    const cacheV = JSON.parse(Utils.readFile(cacheFile) || '{}')[this.id];
    if (cacheV !== undefined) this.value = cacheV;

    this.connect('changed', () => {
      const cache = JSON.parse(Utils.readFile(cacheFile) || '{}');
      cache[this.id] = this.value;
      Utils.writeFileSync(JSON.stringify(cache, null, 2), cacheFile);
    });
  }

  reset() {
    if (this.persistent) return;

    if (JSON.stringify(this.value) !== JSON.stringify(this.initial)) {
      this.value = this.initial;
      return this.id;
    }
  }
}

export const agsOption = <T,>(initial: T, props?: AgsOptionProps) => new AgsOption(initial, props);

/**
 * 将 obj 对象转为 AgsOption 数组
 *
 * @param obj - 参数对象
 * @param path - 路径名称
 * @returns 返回一个 id 为 路径名称的 AgsOption 数组
 */
export const getOptions = (obj: object, path: string = ''): AgsOption[] => {
  return Object.keys(obj).flatMap(key => {
    const option: AgsOption | object = obj[key];
    const id = path ? `${path}.${key}` : key;

    if (option instanceof AgsOption) {
      option.id = id;
      return option;
    }
    if (typeof option === 'object') {
      return getOptions(option, id);
    }
    return [];
  });
};

export const mkOptions = <T extends object>(cacheFile: string, object: T) => {
  for (const opt of getOptions(object)) opt.init(cacheFile);

  const configFile = `${TMP}/config.json`;
  const values = getOptions(object).reduce((obj, { id, value }) => ({ [id]: value, ...obj }), {});
  Utils.writeFileSync(JSON.stringify(values, null, 2), configFile);
  Utils.monitorFile(configFile, () => {
    const cache = JSON.parse(Utils.readFile(configFile) || '{}');
    for (const opt of getOptions(object)) {
      if (JSON.stringify(cache[opt.id]) !== JSON.stringify(opt.value)) opt.value = cache[opt.id];
    }
  });

  const reset = async ([opt, ...list] = getOptions(object), id = opt?.reset()): Promise<Array<string>> => {
    return !!opt ? (id ? [id, ...(await wait(50, () => reset(list)))] : await wait(0, () => reset(list))) : wait(0, () => []);
  };

  return Object.assign(object, {
    configFile,
    array: () => getOptions(object),
    async reset() {
      return (await reset()).join('\n');
    },
    handler(deps: string[], callback: () => void) {
      for (const opt of getOptions(options)) {
        if (deps.some(i => opt.id.startsWith(i))) opt.connect('changed', callback);
      }
    },
  });
};
