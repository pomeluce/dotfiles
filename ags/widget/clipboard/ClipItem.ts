import cliphist from 'service/cliphist';

export default (clipItem: string) => {
  const title = Widget.Label({
    className: 'title',
    label: clipItem,
    xalign: 0,
    vpack: 'center',
    truncate: 'end',
  });

  const textBox = Widget.Box({
    vertical: true,
    vpack: 'center',
    children: [title],
  });

  return Widget.Button({
    className: 'clip-item',
    attribute: { name: clipItem },
    child: Widget.Box({
      children: [textBox],
    }),
    onClicked: () => {
      App.closeWindow('clipboard');
      cliphist.select(clipItem);
    },
  });
};
