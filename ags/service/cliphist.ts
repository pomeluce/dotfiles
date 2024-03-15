import { bash, dependencies } from 'lib/utils';
import { Subprocess } from 'types/@girs/gio-2.0/gio-2.0.cjs';
import Entry from 'types/widgets/entry';

class Cliphist extends Service {
  static {
    Service.register(this, { 'cliphist-changed': ['jsobject'] }, { 'cliphist-value': ['jsobject'] });
  }

  #history = [] as string[];

  #proc = {} as Subprocess | null;

  get history() {
    return this.#history;
  }

  get proc() {
    return this.#proc;
  }

  constructor() {
    super();
    if (dependencies('wl-paste', 'cliphist')) {
      bash(`PID=$(ps -ef | grep 'wl-paste --watch bash -c cliphist store && echo "cliphist changed"' | grep -v grep | awk '{print $2}')
            if [ -n "$PID" ]; then
              echo "$PID" | xargs kill
            fi`).then(() => {
        this.#proc = Utils.subprocess(
          ['bash', '-c', 'wl-paste --watch bash -c \'cliphist store && echo "cliphist changed"\''],
          _ => this.onChange(),
          (err: any) => logError(err),
        );
      });
      this.onChange();
    }
  }

  async onChange() {
    this.#history = Utils.exec('cliphist list').split('\n');
    this.emit('changed');
    this.notify('cliphist-value');
    this.emit('cliphist-changed', this.#history);
  }

  connect(event = 'cliphist-changed', callback: (_: this, ...args: any[]) => void) {
    return super.connect(event, callback);
  }

  async select(selected: string | Entry<unknown>) {
    bash(`echo '${selected}' | cliphist decode | wl-copy`);
  }

  readonly query = (term: string) => {
    if (!term) return this.#history;
    return this.#history.filter(item => item.match(term));
  };
}

const cliphist = new Cliphist();
export default cliphist;
