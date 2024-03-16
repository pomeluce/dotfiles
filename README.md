![dotfile](https://readme-typing-svg.demolab.com/?font=Fira+Code&size=30&pause=1000&color=000000&vCenter=true&width=435&height=45&lines=Dotfiles)

---

## Dotfile 备份管理

- dotfile 文件备份管理, 备份 ags alacritty hyprland ideavim zsh 等常用软件的配置文件

## 配置

### hyprland

```shell
yay -S hyprland xorg-xrdb dconf dconf-editor pipewire wireplumber cliphist gnome-keyring qt6ct polkit-kde-agent kvantum
```

- 依赖说明:

  1. xorg-xrdb: 调整 xwayland 缩放
  2. dconf dconf-editor: 配置 GTK 程序
  3. qt6ct: 配置 QT 程序
  4. pipewire wireplumber: 屏幕共享依赖
  5. cliphist: wayland 剪切依赖
  6. gnome-keyring: 保存登录信息
  7. polkit-kde-agent: 权限认证组件

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
  1. 下载链接: [DeepinV20 dark cursor](https://www.pling.com/p/1422127/)
  2. 解压缩到 ~/.icons/ 目录下
  3. GTK 设置 -> dconf-editor -> org.gnome.desktop.interface -> cursor-theme, QT 跟随 Hyprland 设置(exec 或 env)

- 缩放配置
  1. dconf-editor -> org.gnome.desktop.interface -> scaling-factor (界面缩放, 貌似没用)
  2. dconf-editor -> org.gnome.desktop.interface -> text-scaling-factor (字体缩放, 1.5)
  3. Fcitx 输入法 dpi: fcitx5-configtool -> Addons -> Classic User Interface -> Use Per Scrren DPI ✔ , Force Font DPI on Wayland 144

### ags

1. 执行如下命令安装依赖

```shell
yay -S aylurs-gtk-shell gvfs hyprpicker brightnessctl wl-clipboard wf-recorder wayshot slurp swappy pulseaudio pavucontrol gnome-bluetooth-3.0 blueman swww networkmanager network-manager-applet matugen(not aur)
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

### 常用软件

```shell
yay -S firefox chromium alacritty spotify neofetch fcitx5 fcitx5-rime fcitx5-chinese-addons fcitx5-configtool telegram-dekstop typora visual-studio-code-bin intellij-idea-ultimate-edition linuxqq dolphin
```

### 配置链接命令

```shell
ln -s $PWD/ags ~/.config/ag
ln -s $PWD/neofetch ~/.config/neofetch
ln -s $PWD/alacritty ~/.config/alacritty
ln -s $PWD/fontconfig ~/.config/fontconfig
ln -s $PWD/hypr ~/.config/hypr
ln -s $PWD/fcitx5 ~/.local/share/fcitx5
ln -s $PWD/dot/.gitconfig ~/.gitconfig
ln -s $PWD/dot/.ideavimrc ~/.ideavimrc
ln -s $PWD/dot/.npmrc ~/.npmrc
ln -s $PWD/dot/.yarnrc ~/.yarnrc
ln -s $PWD/dot/.zshrc ~/.zshrc

echo -e '\nsource $PWD/dot/.profile' >> /etc/profile
```

### firefox 垂直侧边栏配置

1. 安装侧边栏插件(登录账号同步插件)
2. 地址栏输入: `about:config`
3. 搜索: userprof
4. 双击toolkit.legacyUserProfileCustomizations.stylesheets 将其修改为: true
5. 点击: ☰ -> [帮助] -> [更多排障信息], 找到[配置文件夹]选项, 复制文件夹路径
6. 终端执行: `ln -s $PWD/chrome '复制的路径/chrome'`
