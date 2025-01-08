# Dotfile

> 管理 ags alacritty hyprland ideavim zsh 等常用软件的配置文件

## 配置

### 系统环境

- 开发常用环境, rustup 安装后执行 `rustup default stable` 安装稳定版 rust 环境

```shell
yay -S gcc make rustup nodejs npm pnpm yarn typescript go lua nvim zulu-21-bin maven gradle git wget curl
```

- 字体, [苹方字体](https://github.com/xMuu/arch-kde-fontconfig)

```shell
yay -S ttf-cascadia-mono-nerd adobe-source-han-serif-cn-fonts wqy-zenhei noto-fonts-cjk noto-fonts-emoji noto-fonts-extra
```

- 解压缩工具

```shell
yay -S p7zip unrar unarchiver lzop lrzip unzip
```

- nvim 依赖

```shell
yay -S python-pynvim the_silver_searcher fd bat ripgrep unzip luarocks
```

- zsh 环境依赖

```shell
yay -S fd eza bat fzf ueberzug lsd git lua
```

### hyprland

```shell
yay -S hyprland xorg-xrdb dconf dconf-editor pipewire wireplumber cliphist gnome-keyring qt6ct polkit-kde-agent kvantum accountsservice swaylock-effects xsettingsd fprintd
```

- 依赖说明:

  1. xorg-xrdb: 调整 xwayland 缩放
  2. dconf dconf-editor: 配置 GTK 程序
  3. qt6ct: 配置 QT 程序
  4. pipewire wireplumber: 屏幕共享依赖
  5. cliphist: wayland 剪切依赖
  6. gnome-keyring: 保存登录信息
  7. polkit-kde-agent: 权限认证组件
  8. fprintd: [指纹认证组件](https://wiki.archlinuxcn.org/zh-sg/Fprint)

- wayland 下 vscode 登录信息配置 gnome-keyring:

```
vscode 配置文件(~/.vscode/argv.json) 配置 "password-store": "gnome-libsecret"
```

- QT 主题配置: qt6ct -> style: 选择 kvantum

- GTK 主题

  1. 下载连接: [WhiteSur GTK Theme](https://www.pling.com/p/1403328/)
  2. 解压锁放到 ~/.themes/ 目录下
  3. 使用 dconf-editor 设置: org.gnome.desktop.interface -> gtk-theme

- 安装光标主题

  1. 下载链接: [DeepinV20 white cursor](https://www.pling.com/p/1421622/), [ice-cursor](https://github.com/ful1e5/Bibata_Cursor)
  2. 解压缩到 ~/.icons/ 目录下
  3. GTK 设置 -> dconf-editor -> org.gnome.desktop.interface -> cursor-theme, QT 跟随 Hyprland 设置(exec 或 env)
  4. envs.conf 设置 HYPRCURSOR_THEME, XCURSOR_THEME 为 ice-cursors

- sddm 主题

  1. 下载链接: [sddm-astronaut-theme](https://github.com/Keyitdev/sddm-astronaut-theme)
  2. 执行如下命令:

  ```shell
  sudo git clone https://github.com/keyitdev/sddm-astronaut-theme.git /usr/share/sddm/themes/sddm-astronaut-theme
  ```

  3. 在 /etc/sddm.conf.d/ 目录新建一个包含如下内容的 theme.conf 文件

  ```conf
  [Theme]
  Current=sddm-astronaut-theme
  ```

  4. 主题依赖见仓库 README

- 缩放配置
  1. dconf-editor -> org.gnome.desktop.interface -> scaling-factor (界面缩放, 貌似没用)
  2. dconf-editor -> org.gnome.desktop.interface -> text-scaling-factor (字体缩放, 1.5)
  3. Fcitx 输入法 dpi: fcitx5-configtool -> Addons -> Classic User Interface -> Use Per Scrren DPI ✔ , Force Font DPI on Wayland 144

### ags

1. 执行如下命令安装依赖

```shell
yay -S aylurs-gtk-shell libastal-io-git libastal-git hyprpicker brightnessctl wl-clipboard wf-recorder wayshot slurp swappy pulseaudio pavucontrol gnome-bluetooth-3.0 blueman swww networkmanager network-manager-applet matugen-bin
```

- 依赖说明
  1. aylurs-gtk-shell: ags bar
  2. hyprpicker: 拾色器
  3. brightnessctl: 亮度调节
  4. wl-clipboard, wl-recorder, wayshot, slurp, swappy: 剪切录屏
  5. pulseaudio: 音量调节
  6. pavucontrol: 音量调节面板
  7. gnome-bluetooth-3.0: 蓝牙
  8. blueman: 蓝牙
  9. swww: 图片壁纸
  10. networkmanager network-manager-applet: 网络管理
  11. matugen-bin: 主题配色生成

### 常用软件

```shell
yay -S firefox chromium wezterm-git spotify neofetch fcitx5 fcitx5-rime fcitx5-chinese-addons fcitx5-configtool telegram-dekstop typora visual-studio-code-bin intellij-idea-ultimate-edition linuxqq dolphin
```

### 配置链接命令

```shell
ln -s $PWD/ags ~/.config/ags
ln -s $PWD/fastetch ~/.config/fastfetch
ln -s $PWD/fontconfig ~/.config/fontconfig
ln -s $PWD/hypr ~/.config/hypr
ln -s $PWD/swaylock ~/.config/swaylock
ln -s $PWD/wezterm ~/.config/wezterm
ln -s $PWD/xsettingsd ~/.config/xsettingsd
ln -s $PWD/version-fox/config.yaml ~/.version-fox/config.yaml
ln -s $PWD/dot/.gitconfig ~/.gitconfig
ln -s $PWD/dot/.ideavimrc ~/.ideavimrc
ln -s $PWD/dot/.npmrc ~/.npmrc
ln -s $PWD/dot/.yarnrc ~/.yarnrc
ln -s $PWD/dot/.zlua ~/.zlua
ln -s $PWD/dot/.zshrc ~/.zshrc

echo -e '\nsource $PWD/dot/.profile' >> /etc/profile
```

## fcitx5 配置

1. 克隆 git 雾凇拼音词库到配置文件夹

```git
git clone https://github.com/iDvel/rime-ice.git ~/.local/share/fcitx5/rime
```

2. 执行如下命令链接自定义配置

```shell
ln -s $PWD/fcitx5/rime/default.custom.yaml ~/.local/share/fcitx5/rime/default.custom.yaml
ln -s $PWD/fcitx5/rime/double_pinyin_flypy.custom.yaml ~/.local/share/fcitx5/rime/double_pinyin_flypy.custom.yaml
```

3. 链接主题文件

```shell
ln -s $PWD/fcitx5/themes ~/.local/share/fcitx5/themes
```

### firefox 垂直侧边栏配置

1. 安装侧边栏插件(登录账号同步插件)
2. 地址栏输入: `about:config`
3. 搜索: userprof
4. 双击toolkit.legacyUserProfileCustomizations.stylesheets 将其修改为: true
5. 点击: ☰ -> [帮助] -> [更多排障信息], 找到[配置文件夹]选项, 复制文件夹路径
6. 终端执行: `ln -s $PWD/chrome '复制的路径/chrome'`

### steam 使用兼容模式运行的游戏 `Couldn’t switch to requested monitor resolution`

1. 进入游戏库
2. 右击游戏选项
3. 选择属性
4. 在通用 -> 启动选项中填入: `PROTON_USE_WINED3D=1 %COMMAND%`
