import options from 'options';

const { hibernate, sleep, reboot, logout, shutdown, lockscreen } = options.powermenu;

export type Action = 'hibernate' | 'sleep' | 'reboot' | 'logout' | 'shutdown' | 'lockscreen';

class PowerMenu extends Service {
  static {
    Service.register(
      this,
      {},
      {
        title: ['string'],
        cmd: ['string'],
      },
    );
  }

  #title = '';
  #cmd = '';

  get title() {
    return this.#title;
  }
  get cmd() {
    return this.#cmd;
  }

  action(action: Action) {
    [this.#cmd, this.#title] = {
      hibernate: [hibernate.value, 'Hibernate'],
      sleep: [sleep.value, 'Sleep'],
      reboot: [reboot.value, 'Reboot'],
      logout: [logout.value, 'Log Out'],
      shutdown: [shutdown.value, 'Shutdown'],
      lockscreen: [lockscreen.value, 'LockScreen'],
    }[action];

    this.notify('cmd');
    this.notify('title');
    this.emit('changed');
    App.closeWindow('powermenu');
    App.openWindow('verification');
  }

  readonly shutdown = () => {
    this.action('shutdown');
  };
}

const powermenu = new PowerMenu();
globalThis['powermenu'] = powermenu;
export default powermenu;
