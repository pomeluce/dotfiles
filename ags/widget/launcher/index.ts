import { type Binding } from 'lib/utils';
import PopupWindow, { Padding } from 'widget/PopupWindow';
import icons from 'lib/icons';
import options from 'options';
import * as AppRun from './AppRun';
import * as ShRun from './ShellRun';

const { width, margin } = options.launcher;

function Launcher() {
  const favs = AppRun.Favorites();
  const applauncher = AppRun.Launcher();
  const sh = ShRun.ShRun();
  const shicon = ShRun.Icon();

  const HelpButton = (cmd: string, desc: string | Binding<string>) => {
    return Widget.Box(
      { vertical: true },
      Widget.Separator(),
      Widget.Button(
        {
          className: 'help',
          onClicked: () => {
            entry.grab_focus();
            entry.text = `:${cmd} `;
            entry.set_position(-1);
          },
        },
        Widget.Box([
          Widget.Label({
            className: 'name',
            label: `:${cmd}`,
          }),
          Widget.Label({
            hexpand: true,
            hpack: 'end',
            className: 'description',
            label: desc,
          }),
        ]),
      ),
    );
  };

  const help = Widget.Revealer({
    child: Widget.Box({ vertical: true }, HelpButton('sh', 'run a binary'), Widget.Box()),
  });

  const entry = Widget.Entry({
    hexpand: true,
    primaryIconName: icons.ui.search,
    onAccept: ({ text }) => {
      if (text?.startsWith(':sh')) sh.run(text.substring(3));
      else applauncher.launchFirst();

      App.toggleWindow('launcher');
      entry.text = '';
    },
    onChange: ({ text }) => {
      text ||= '';
      favs.revealChild = text === '';
      help.revealChild = text.split(' ').length === 1 && text?.startsWith(':');

      if (text?.startsWith(':sh')) sh.filter(text.substring(3));
      else sh.filter('');

      if (!text?.startsWith(':')) applauncher.filter(text);
    },
  });

  const focus = () => {
    entry.text = 'Search';
    entry.set_position(-1);
    entry.select_region(0, -1);
    entry.grab_focus();
    favs.revealChild = true;
  };

  const layout = Widget.Box({
    css: width.bind().as(v => `min-width: ${v}pt;`),
    className: 'launcher',
    vertical: true,
    vpack: 'start',
    setup: self =>
      self.hook(App, (_, win, visible) => {
        if (win !== 'launcher') return;

        entry.text = '';
        if (visible) focus();
      }),
    children: [Widget.Box([entry, shicon]), favs, help, applauncher, sh],
  });

  return Widget.Box(
    { vertical: true, css: 'padding: 1px' },
    Padding('applauncher', {
      css: margin.bind().as(v => `min-height: ${v}pt;`),
      vexpand: false,
    }),
    layout,
  );
}

export default () =>
  PopupWindow({
    name: 'launcher',
    layout: 'top',
    child: Launcher(),
  });
