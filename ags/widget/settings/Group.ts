import Row from './Row';

export default <T,>(title: string, ...rows: ReturnType<typeof Row<T>>[]) =>
  Widget.Box({
    className: 'group',
    vertical: true,
    children: [
      Widget.Label({
        hpack: 'start',
        className: 'group-title',
        label: title,
        setup: w => Utils.idle(() => (w.visible = !!title)),
      }),
      Widget.Box({
        vertical: true,
        children: rows,
      }),
    ],
  });
