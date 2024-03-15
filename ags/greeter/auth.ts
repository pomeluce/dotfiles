import AccountsService from 'gi://AccountsService?version=1.0';
import icons from 'lib/icons';

const { iconFile, realName, userName = 'default' } = AccountsService.UserManager.get_default().list_users()[0];

const loggingin = Variable(false);

async function login(password: string) {
  const greetd = await Service.import('greetd');
  return greetd.login(userName!, password, 'Hyprland', ['WLR_NO_HARDWARE_CURSORS=1', '_JAVA_AWT_WM_NONREPARENTING=1']);
}

const avatar = Widget.Box({
  className: 'avatar',
  hpack: 'center',
  css: `background-image: url('${iconFile}')`,
});

const password = Widget.Entry({
  placeholderText: 'Password',
  hexpand: true,
  visibility: false,
  onAccept: ({ text }) => {
    loggingin.value = true;
    login(text!).catch(res => {
      loggingin.value = false;
      response.label = res?.description || JSON.stringify(res);
      password.text = '';
      revealer.reveal_child = true;
    });
  },
});

const response = Widget.Label({
  className: 'response',
  wrap: true,
  maxWidthChars: 35,
  hpack: 'center',
  hexpand: true,
  xalign: 0.5,
});

const revealer = Widget.Revealer({
  transition: 'slide_down',
  child: response,
});

export default Widget.Box({
  className: 'auth',
  attribute: { password },
  vertical: true,
  children: [
    Widget.Overlay({
      child: Widget.Box(
        {
          css: 'min-width: 200px; min-height: 200px;',
          vertical: true,
        },
        Widget.Box({
          className: 'wallpaper',
          css: `background-image: url('${WALLPAPER}')`,
        }),
        Widget.Box({
          className: 'wallpaper-contrast',
          vexpand: true,
        }),
      ),
      overlay: Widget.Box(
        {
          vpack: 'end',
          vertical: true,
        },
        avatar,
        Widget.Box({
          hpack: 'center',
          children: [Widget.Icon(icons.ui.avatar), Widget.Label(realName || userName!)],
        }),
        Widget.Box(
          {
            className: 'password',
          },
          Widget.Spinner({
            visible: loggingin.bind(),
            active: true,
          }),
          Widget.Icon({
            visible: loggingin.bind().as(b => !b),
            icon: icons.ui.lock,
          }),
          password,
        ),
      ),
    }),
    Widget.Box({ class_name: 'response-box' }, revealer),
  ],
});
