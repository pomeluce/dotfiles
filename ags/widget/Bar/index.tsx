import { Astal, Gtk, Gdk } from 'astal/gtk3';
import Workspaces from './workspace';
import FocusedClient from './focused-client';
import Media from './media';
import SysTray from './tray';
import AudioSlider from './audio';
import BatteryLevel from './battery';
import Wifi from './wifi';
import Time from './time';

export default function Bar(monitor: Gdk.Monitor) {
  const anchor = Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT;

  return (
    <window className="bar" gdkmonitor={monitor} exclusivity={Astal.Exclusivity.EXCLUSIVE} anchor={anchor}>
      <centerbox>
        <box hexpand halign={Gtk.Align.START}>
          <Workspaces />
          {/* <FocusedClient /> */}
        </box>
        <box>
          <Media />
        </box>
        <box hexpand halign={Gtk.Align.END}>
          <SysTray />
          <Wifi />
          <AudioSlider />
          <BatteryLevel />
          <Time />
        </box>
      </centerbox>
    </window>
  );
}
