import options from 'options';
import { arrayRandom, dependencies, readdirImage, sh } from './utils';
import hyprland from './hyprland';

// this is where the gtk portal sets the wallpaper
const WP = `/home/${Utils.USER}/.config/wallpapers`;

const wallpaper = async () => {
  const prefix = options.wallpaper.dir.value.endsWith('/') ? options.wallpaper.dir.value : options.wallpaper.dir.value + '/';
  const names = readdirImage(options.wallpaper.dir.value);
  if (names.length > 0) {
    const pos = await sh('hyprctl cursorpos');
    const name = arrayRandom(names);
    options.wallpaper.name.setValue(name);
    await sh(['swww', 'img', '--transition-type', 'grow', '--transition-fps', `${options.wallpaper.fps.value}`, '--transition-pos', pos.replace(' ', ''), `${prefix}${name}`]);
    hyprland();
  }
};

export default async function init() {
  if (!dependencies('swww')) return;

  Utils.monitorFile(WP, () => options.wallpaper.dir.setValue(WP));
  options.wallpaper.dir.connect('changed', wallpaper);

  Utils.execAsync('swww init').catch(() => {});

  wallpaper();

  setInterval(() => {
    wallpaper();
  }, options.wallpaper.interval.value * 1000);
}
