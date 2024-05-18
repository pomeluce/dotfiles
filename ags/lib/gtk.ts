import Gio from 'gi://Gio';
import options from 'options';

const settings = new Gio.Settings({
  schema: 'org.gnome.desktop.interface',
});

function gtk() {
  const { enable, mode } = options.theme.scheme;
  if (enable.value) settings.set_string('color-scheme', `prefer-${mode}`);
}

export default function init() {
  options.theme.scheme.mode.connect('changed', gtk);
  gtk();
}
