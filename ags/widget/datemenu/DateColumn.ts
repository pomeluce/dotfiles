import { clock, uptime } from 'lib/variables';

function up(up: number) {
  const h = Math.floor(up / 60);
  const m = Math.floor(up % 60);
  return `uptime: ${h}:${m < 10 ? '0' + m : m}`;
}

export default () =>
  Widget.Box({
    vertical: true,
    className: 'date-column vertical',
    children: [
      Widget.Box({
        className: 'clock-box',
        vertical: true,
        children: [
          Widget.Label({
            className: 'clock',
            label: clock.bind().as(t => t.format('%H:%M')!),
          }),
          Widget.Label({
            className: 'uptime',
            label: uptime.bind().as(up),
          }),
        ],
      }),
      Widget.Box({
        className: 'calendar',
        children: [
          Widget.Calendar({
            hexpand: true,
            hpack: 'center',
          }),
        ],
      }),
    ],
  });
