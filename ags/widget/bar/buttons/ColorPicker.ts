import PanelButton from '../PanelButton';
import colorpicker from 'service/colorpicker';
import Gdk from 'gi://Gdk';

const css = (color: string) => `
* {
    background-color: ${color};
    color: transparent;
}
*:hover {
    color: white;
    text-shadow: 2px 2px 3px rgba(0,0,0,.8);
}`;

export default () => {
  const menu = Widget.Menu({
    className: 'colorpicker',
    children: colorpicker.bind('colors').as(c =>
      c.map(color =>
        Widget.MenuItem({
          child: Widget.Label(color),
          css: css(color),
          on_activate: () => colorpicker.wlCopy(color),
        }),
      ),
    ),
  });

  return PanelButton({
    className: 'color-picker',
    child: Widget.Icon('color-select-symbolic'),
    tooltipText: colorpicker.bind('colors').as(v => `${v.length} colors`),
    onClicked: colorpicker.pick,
    onSecondaryClick: self => {
      if (colorpicker.colors.length === 0) return;

      menu.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null);
    },
  });
};
