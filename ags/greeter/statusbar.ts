import options from 'options';
import { clock } from 'lib/variables';
import icons from 'lib/icons';
import BatteryBar from 'widget/bar/buttons/BatteryBar';
import PanelButton from 'widget/bar/PanelButton';

const {
  scheme: { mode },
} = options.theme;
const { monochrome } = options.bar.powermenu;

const poweroff = PanelButton({
  className: 'powermenu',
  child: Widget.Icon(icons.powermenu.shutdown),
  onClicked: () => Utils.exec('shutdown now'),
  setup: self =>
    self.hook(monochrome, () => {
      self.toggleClassName('colored', !monochrome.value);
      self.toggleClassName('box');
    }),
});

const date = PanelButton({
  className: 'date',
  child: Widget.Label({
    label: clock.bind().as(c => c.format(options.bar.date.format.value) || ''),
  }),
});

const darkmode = PanelButton({
  class_name: 'darkmode',
  child: Widget.Icon({ icon: mode.bind().as(s => icons.color[s]) }),
  onClicked: () => (mode.value = mode.value === 'dark' ? 'light' : 'dark'),
});

export default Widget.CenterBox({
  className: 'bar',
  hexpand: true,
  centerWidget: date,
  endWidget: Widget.Box({
    hpack: 'end',
    children: [darkmode, BatteryBar(), poweroff],
  }),
});
