import { type Application } from 'types/service/applications';
import icons, { substitutes } from './icons';
import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import Gdk from 'gi://Gdk';
import GLib from 'gi://GLib?version=2.0';

export type Binding<T> = import('types/service').Binding<any, any, T>;

export const icon = (name: string | null, fallback = icons.missing) => {
  if (!name) return fallback || '';

  if (GLib.file_test(name, GLib.FileTest.EXISTS)) return name;

  const icon = substitutes[name.toLowerCase()] || name;
  if (Utils.lookUpIcon(icon)) return icon;

  print(`no icon substitute "${icon}" for "${name}", fallback: "${fallback}"`);
  return fallback;
};

export const bash = async (strings: TemplateStringsArray | string, ...values: unknown[]) => {
  const cmd = typeof strings === 'string' ? strings : strings.flatMap((str, i) => str + `${values[i] ?? ''}`).join('');

  return Utils.execAsync(['bash', '-c', cmd]).catch(err => {
    console.error(cmd, err);
    return '';
  });
};

/**
 * 执行给定命令, 并返回结果
 *
 * @param cmd - 命令
 * @returns 返回命令执行结果
 */
export const sh = async (cmd: string | string[]) => {
  return Utils.execAsync(cmd).catch(err => {
    console.error(typeof cmd === 'string' ? cmd : cmd.join(' '), err);
    return '';
  });
};

/**
 * 生成监视器 GTK 窗口数组
 *
 * @param widget - GTK 窗口对象
 * @returns 返回一个 GTK 窗口数组
 */
export const forMonitors = (widget: (monitor: number) => Gtk.Window) => {
  const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
  return range(n, 0).map(widget).flat(1);
};

/**
 * 生成指定长度和起始索引的数组
 *
 * @param length - 数组长度
 * @param start - 起始索引
 */
export const range = (length: number, start = 1) => Array.from({ length }, (_, index) => index + start);

/**
 * 延迟执行函数并将执行结果以 Promise 形式返回
 *
 * @template T - 泛型参数
 * @param mils - 延迟时间
 * @param callback - 回调函数
 * @returns 返回一个 Promise 执行结果
 */
export const wait = <T,>(mils: number, callback: () => T): Promise<T> => {
  return new Promise(resolve =>
    Utils.timeout(mils, () => {
      resolve(callback());
    }),
  );
};

/**
 * 查找系统是否安装了传入的命令对应的依赖包
 *
 * @param bins - 命令数组
 * @returns 返回一个 boolean 类型的结果
 */
export const dependencies = (...bins: string[]) => {
  const missing = bins.filter(bin => {
    return !(!!Utils.exec(`which ${bin}`) || !!Utils.exec(`ls ${App.configDir}/node_modules/.bin/ | grep ${bin}`));
  });

  if (missing.length > 0) console.warn('missing dependencies:', missing.join(', '));

  return missing.length === 0;
};

export const launchApp = (app: Application) => {
  const exe = app.executable
    .split(/\s+/)
    .filter(str => !str.startsWith('%') && !str.startsWith('@'))
    .join(' ');

  bash(`${exe} &`);
  app.frequency += 1;
};

export const createSurfaceFromWidget = (widget: Gtk.Widget) => {
  const cairo = imports.gi.cairo as any;
  const alloc = widget.get_allocation();
  const surface = new cairo.ImageSurface(cairo.Format.ARGB32, alloc.width, alloc.height);
  const cr = new cairo.Context(surface);
  cr.setSourceRGBA(255, 255, 255, 0);
  cr.rectangle(0, 0, alloc.width, alloc.height);
  cr.fill();
  widget.draw(cr);
  return surface;
};

export const arrayRandom = (array: Array<string>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array[0];
};

export const readdirImage = (file: string | Gio.File) => {
  const dir = typeof file === 'string' ? Gio.file_new_for_path(file) : file;
  const child = dir.enumerate_children('standard::*', Gio.FileQueryInfoFlags.NONE, null);

  const fileNames: string[] = [];
  let item: Gio.FileInfo | null;
  while ((item = child.next_file(null))) {
    if (item !== null) {
      const name = item.get_name();
      const type = item.get_file_type();
      const mime = item.get_content_type();
      if (type === Gio.FileType.REGULAR && mime?.startsWith('image/')) {
        fileNames.push(name);
      }
    }
  }

  return fileNames;
};
