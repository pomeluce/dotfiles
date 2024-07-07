import { type BarWidget } from 'widget/bar';
import { agsOption, mkOptions } from 'lib/option';
import { icon } from 'lib/utils';
import icons from 'lib/icons';
import { distro } from 'lib/variables';

const wpCount = 7;

const options = mkOptions(OPTIONS, {
  autotheme: agsOption(false),

  wallpaper: {
    dir: agsOption(`/home/${USER}/.config/wallpapers`, { persistent: true }),
    interval: agsOption(60 * 5),
    name: agsOption(''),
    fps: agsOption(165),
  },
  // 主题
  theme: {
    dark: {
      primary: {
        bg: agsOption('#47ad89'),
        fg: agsOption('#eeeeee'),
      },
      error: {
        bg: agsOption('#e55f86'),
        fg: agsOption('#141414'),
      },
      bg: agsOption('#171717'),
      fg: agsOption('#eeeeee'),
      widget: agsOption('#eeeeee'),
      border: agsOption('#eeeeee'),
    },
    light: {
      primary: {
        bg: agsOption('#47ad89'),
        fg: agsOption('#141414'),
      },
      error: {
        bg: agsOption('#b13558'),
        fg: agsOption('#eeeeee'),
      },
      bg: agsOption('#fffffa'),
      fg: agsOption('#080808'),
      widget: agsOption('#080808'),
      border: agsOption('#080808'),
    },

    blur: agsOption(50),
    scheme: {
      enable: agsOption(false),
      mode: agsOption<'dark' | 'light'>('dark'),
    },
    widget: { opacity: agsOption(94) },
    border: {
      width: agsOption(1),
      opacity: agsOption(96),
    },

    shadows: agsOption(true),
    padding: agsOption(7),
    spacing: agsOption(12),
    radius: agsOption(11),
  },

  transition: agsOption(200),

  font: {
    size: agsOption(10),
    name: agsOption('CaskaydiaMono Nerd Font Mono'),
  },

  bar: {
    // 平面按钮
    flatButtons: agsOption(true),
    // 位置
    position: agsOption<'top' | 'bottom'>('top'),
    // 屏幕圆角
    corners: agsOption(false),
    // 布局
    layout: {
      start: agsOption<BarWidget[]>(['launcher', 'workspaces', 'taskbar', 'expander', 'messages']),
      center: agsOption<BarWidget[]>(['date']),
      end: agsOption<BarWidget[]>(['media', 'expander', 'systray', 'colorpicker', 'screenrecord', 'system', 'battery', 'powermenu']),
    },

    launcher: {
      icon: {
        colored: agsOption(true),
        icon: agsOption(icon(distro, icons.ui.search)),
        size: agsOption(24),
      },
      label: {
        colored: agsOption(false),
        label: agsOption(' Applications'),
      },
      action: agsOption(() => App.toggleWindow('launcher')),
    },

    date: {
      format: agsOption('%m-%d %H:%M:%S - %A'),
      action: agsOption(() => App.toggleWindow('datemenu')),
    },

    battery: {
      bar: agsOption<'hidden' | 'regular' | 'whole'>('regular'),
      charging: agsOption('#47ad89'),
      percentage: agsOption(true),
      blocks: agsOption(7),
      width: agsOption(50),
      low: agsOption(30),
    },

    // 工作空间
    workspaces: {
      workspaces: agsOption(wpCount),
    },

    taskbar: {
      iconSize: agsOption(0),
      monochrome: agsOption(true),
      exclusive: agsOption(false),
    },

    messages: {
      action: agsOption(() => App.toggleWindow('datemenu')),
    },

    systray: {
      ignore: agsOption(['KDE Connect Indicator', 'spotify-client', 'blueman']),
    },

    media: {
      monochrome: agsOption(true),
      preferred: agsOption('spotify'),
      direction: agsOption<'left' | 'right'>('right'),
      length: agsOption(40),
    },

    powermenu: {
      monochrome: agsOption(false),
      action: agsOption(() => App.toggleWindow('powermenu')),
    },
  },

  launcher: {
    iconSize: agsOption(72),
    width: agsOption(0),
    margin: agsOption(80),
    maxItem: agsOption(6),
    favorites: agsOption([['IDEA', 'code', 'firefox', 'telegram', 'typora', 'Spotify']]),
    sh: {
      max: agsOption(16),
    },
  },

  clipboard: {
    width: agsOption(450),
    margin: agsOption(80),
  },

  overview: {
    scale: agsOption(9),
    workspaces: agsOption(wpCount),
    monochromeIcon: agsOption(true),
  },

  powermenu: {
    sleep: agsOption('systemctl suspend'),
    reboot: agsOption('systemctl reboot'),
    logout: agsOption('pkill Hyprland'),
    shutdown: agsOption('shutdown now'),
    lockscreen: agsOption('swaylock -eF'),
    layout: agsOption<'line' | 'box'>('line'),
    labels: agsOption(true),
  },
  quicksettings: {
    avatar: {
      image: agsOption(`/var/lib/AccountsService/icons/${Utils.USER}`),
      size: agsOption(70),
    },
    width: agsOption(380),
    position: agsOption<'left' | 'center' | 'right'>('right'),
    bluetoothSettins: agsOption('blueman-manager'),
    networkSettings: agsOption('nm-connection-editor'),
    media: {
      monochromeIcon: agsOption(true),
      coverSize: agsOption(100),
    },
  },
  datemenu: {
    position: agsOption<'left' | 'center' | 'right'>('center'),
  },

  osd: {
    progress: {
      vertical: agsOption(true),
      pack: {
        h: agsOption<'start' | 'center' | 'end'>('end'),
        v: agsOption<'start' | 'center' | 'end'>('start'),
      },
    },
    microphone: {
      pack: {
        h: agsOption<'start' | 'center' | 'end'>('end'),
        v: agsOption<'start' | 'center' | 'end'>('start'),
      },
    },
  },
  notifications: {
    position: agsOption<Array<'top' | 'bottom' | 'left' | 'right'>>(['top', 'right']),
    blacklist: agsOption(['Spotify']),
    width: agsOption(440),
    text: agsOption('当前没有任何通知'),
    iconSize: agsOption(90),
  },

  hyprland: {
    gaps: agsOption(2.4),
    inactiveBorder: agsOption('333333ff'),
    gapsWhenOnly: agsOption(false),
  },
});

globalThis['options'] = options;
export default options;
