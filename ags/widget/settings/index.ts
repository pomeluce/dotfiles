import RegularWindow from 'widget/RegularWindow';
import layout from './layout';
import icons from 'lib/icons';
import options from 'options';

const current = Variable(layout[0].attribute.name);

const Header = () =>
  Widget.CenterBox({
    className: 'header',
    startWidget: Widget.Button({
      className: 'reset',
      onClicked: options.reset,
      hpack: 'start',
      vpack: 'start',
      child: Widget.Icon(icons.ui.refresh),
      tooltipText: 'Reset',
    }),
    center_widget: Widget.Box({
      className: 'pager horizontal',
      children: layout.map(({ attribute: { name, icon } }) =>
        Widget.Button({
          xalign: 0,
          className: current.bind().as(v => `${v === name ? 'active' : ''}`),
          onClicked: () => (current.value = name),
          child: Widget.Box([Widget.Icon(icon), Widget.Label(name)]),
        }),
      ),
    }),
    end_widget: Widget.Button({
      className: 'close',
      hpack: 'end',
      vpack: 'start',
      child: Widget.Icon(icons.ui.close),
      onClicked: () => App.closeWindow('settings-dialog'),
    }),
  });

const PagesStack = () =>
  Widget.Stack({
    transition: 'slide_left_right',
    children: layout.reduce((obj, page) => ({ ...obj, [page.attribute.name]: page }), {}),
    shown: current.bind() as never,
  });

export default () =>
  RegularWindow({
    name: 'settings-dialog',
    className: 'settings-dialog',
    title: 'Settings',
    setup(win) {
      win.on('delete-event', () => {
        win.hide();
        return true;
      });
      win.set_default_size(500, 600);
    },
    child: Widget.Box({
      vertical: true,
      children: [Header(), PagesStack()],
    }),
  });
