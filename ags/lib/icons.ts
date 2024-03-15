export const substitutes = {
  'alacritty-symbolic': 'terminal-symbolic',
  'audio-headset-bluetooth': 'audio-headphones-symbolic',
  'audio-card-analog-usb': 'audio-speakers-symbolic',
  'audio-card-pci': 'audio-card-symbolic',
  'blueberry.py': 'blueberry',
  caprine: 'facebook-messenger',
  'chromium-symbolic': 'chromium-browser-symbolic',
  'com.github.aylur.ags-symbolic': 'controls-symbolic',
  'com.github.aylur.ags': 'controls-symbolic',
  'com.raggesilver.BlackBox-symbolic': 'terminal-symbolic',
  'fcitx-symbolic': 'input-keyboard-symbolic',
  'intellij-idea-ultimate-edition-symbolic': 'jetbrains-symbolic',
  'org.kde.dolphin-symbolic': 'system-file-manager-symbolic',
  'pavucontrol-symbolic': 'audio-card-symbolic',
  'preferences-system': 'emblem-system-symbolic',
  'qq-symbolic': 'qchat-symbolic',
  'spotify-client-symbolic': 'spotify-audio-symbolic',
  'spotify-symbolic': 'spotify-audio-symbolic',
  'transmission-gtk': 'transmission',
  'typora-symbolic': 'markdown-symbolic',
  'visual-studio-code-symbolic': 'mvsc-symbolic',
};

export default {
  missing: 'image-missing-symbolic',
  app: {
    terminal: 'terminal-symbolic',
  },
  fallback: {
    executable: 'application-x-executable-symbolic',
    notification: 'dialog-information-symbolic',
    video: 'video-x-generic-symbolic',
    audio: 'audio-x-generic-symbolic',
  },
  ui: {
    close: 'window-close-symbolic',
    colorpicker: 'color-select-symbolic',
    info: 'info-symbolic',
    link: 'external-link-symbolic',
    lock: 'system-lock-screen-symbolic',
    menu: 'open-menu-symbolic',
    refresh: 'view-refresh-symbolic',
    search: 'system-search-symbolic',
    settings: 'emblem-system-symbolic',
    themes: 'applications-graphics-symbolic',
    tick: 'object-select-symbolic',
    time: 'hourglass-symbolic',
    toolbars: 'view-dual-symbolic',
    warning: 'dialog-warning-symbolic',
    avatar: 'avatar-default-symbolic',
    arrow: {
      right: 'pan-end-symbolic',
      left: 'pan-start-symbolic',
      down: 'pan-down-symbolic',
      up: 'pan-up-symbolic',
    },
  },
  audio: {
    mic: {
      muted: 'microphone-disabled-symbolic',
      low: 'microphone-sensitivity-low-symbolic',
      medium: 'microphone-sensitivity-medium-symbolic',
      high: 'microphone-sensitivity-high-symbolic',
    },
    volume: {
      muted: 'audio-volume-muted-symbolic',
      low: 'audio-volume-low-symbolic',
      medium: 'audio-volume-medium-symbolic',
      high: 'audio-volume-high-symbolic',
      overamplified: 'audio-volume-overamplified-symbolic',
    },
    type: {
      headset: 'audio-headphones-symbolic',
      speaker: 'audio-speakers-symbolic',
      card: 'audio-card-symbolic',
    },
    mixer: 'mixer-symbolic',
  },
  powerprofile: {
    balanced: 'power-profile-balanced-symbolic',
    'power-saver': 'power-profile-power-saver-symbolic',
    performance: 'power-profile-performance-symbolic',
  },
  asusctl: {
    profile: {
      Balanced: 'power-profile-balanced-symbolic',
      Quiet: 'power-profile-power-saver-symbolic',
      Performance: 'power-profile-performance-symbolic',
    },
    mode: {
      Integrated: 'processor-symbolic',
      Hybrid: 'controller-symbolic',
    },
  },
  battery: {
    charging: 'battery-flash-symbolic',
    warning: 'battery-empty-symbolic',
  },
  bluetooth: {
    enabled: 'bluetooth-active-symbolic',
    disabled: 'bluetooth-disabled-symbolic',
  },
  brightness: {
    indicator: 'display-brightness-symbolic',
    keyboard: 'keyboard-brightness-symbolic',
    screen: 'display-brightness-symbolic',
  },
  powermenu: {
    sleep: 'weather-clear-night-symbolic',
    reboot: 'system-reboot-symbolic',
    logout: 'system-log-out-symbolic',
    shutdown: 'system-shutdown-symbolic',
  },
  recorder: {
    recording: 'media-record-symbolic',
  },

  notifications: {
    noisy: 'org.gnome.Settings-notifications-symbolic',
    silent: 'notifications-disabled-symbolic',
    message: 'chat-bubbles-symbolic',
  },
  trash: {
    full: 'user-trash-full-symbolic',
    empty: 'user-trash-symbolic',
  },
  mpris: {
    shuffle: {
      enabled: 'media-playlist-shuffle-symbolic',
      disabled: 'media-playlist-consecutive-symbolic',
    },
    loop: {
      none: 'media-playlist-repeat-symbolic',
      track: 'media-playlist-repeat-song-symbolic',
      playlist: 'media-playlist-repeat-symbolic',
    },
    playing: 'media-playback-pause-symbolic',
    paused: 'media-playback-start-symbolic',
    stopped: 'media-playback-start-symbolic',
    prev: 'media-skip-backward-symbolic',
    next: 'media-skip-forward-symbolic',
  },
  system: {
    cpu: 'org.gnome.SystemMonitor-symbolic',
    ram: 'drive-harddisk-solidstate-symbolic',
    temp: 'temperature-symbolic',
  },
  color: {
    dark: 'dark-mode-symbolic',
    light: 'light-mode-symbolic',
  },
};
