import options from 'options';
import BatteryBar from './buttons/BatteryBar';
import ColorPicker from './buttons/ColorPicker';
import Date from './buttons/Date';
import Launcher from './buttons/Launcher';
import Messages from './buttons/Messages';
import Media from './buttons/Media';
import PowerMenu from './buttons/PowerMenu';
import ScreenRecord from './buttons/ScreenRecord';
import SystemIndicators from './buttons/SystemIndicators';
import SysTray from './buttons/SysTray';
import Taskbar from './buttons/Taskbar';
import Workspaces from './buttons/Workspaces';

export type BarWidget = keyof typeof widget;

const widget = {
  battery: BatteryBar,
  colorpicker: ColorPicker,
  date: Date,
  launcher: Launcher,
  media: Media,
  powermenu: PowerMenu,
  systray: SysTray,
  system: SystemIndicators,
  taskbar: Taskbar,
  workspaces: Workspaces,
  screenrecord: ScreenRecord,
  messages: Messages,
  expander: () => Widget.Box({ expand: true }),
};

const { start, center, end } = options.bar.layout;
const position = options.bar.position.bind();

export default (monitor: number) =>
  Widget.Window({
    monitor,
    className: 'bar',
    name: `bar${monitor}`,
    exclusivity: 'exclusive',
    anchor: position.as(ps => [ps, 'left', 'right']),
    child: Widget.CenterBox({
      css: 'min-width: 10px; min-height: 10px;',
      startWidget: Widget.Box({
        hexpand: true,
        children: start.bind().as(sw => sw.map(w => widget[w]())),
      }),
      centerWidget: Widget.Box({
        hpack: 'center',
        children: center.bind().as(cw => cw.map(w => widget[w]())),
      }),
      endWidget: Widget.Box({
        hexpand: true,
        children: end.bind().as(ew => ew.map(w => widget[w]())),
      }),
    }),
  });
