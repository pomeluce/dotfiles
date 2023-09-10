#!/bin/bash

# 生成 UUID, 保证备份文件的唯一性
bak_uuid=$(echo $(uuidgen) | awk -F '-' '{print $5}')

# 创建文件备份目录
backup_dir=$HOME/.dotfiles_${bak_uuid}_bak
mkdir -p $backup_dir

# 备份原有配置文件
mv $HOME/.config/alacritty ${backup_dir}/alacritty_${bak_uuid}.bak
mv $HOME/.config/betterlockscreenrc ${backup_dir}/betterlockscreenrc_${bak_uuid}.bak
mv $HOME/.config/bspwm ${backup_dir}/bspwm_${bak_uuid}.bak
mv $HOME/.config/i3 ${backup_dir}/i3_${bak_uuid}.bak
mv $HOME/.config/neofetch ${backup_dir}/neofetch_${bak_uuid}.bak
mv $HOME/.config/picom ${backup_dir}/picom_${bak_uuid}.bak
mv $HOME/.config/polybar ${backup_dir}/polybar_${bak_uuid}.bak
mv $HOME/.config/rofi ${backup_dir}/rofi_${bak_uuid}.bak
mv $HOME/.config/sxhkd ${backup_dir}/sxhkd_${bak_uuid}.bak
mv $HOME/.gitconfig ${backup_dir}/.gitconfig_${bak_uuid}.bak
mv $HOME/.ideavimrc ${backup_dir}/.ideavimrc_${bak_uuid}.bak
mv $HOME/.npmrc ${backup_dir}/.npmrc_${bak_uuid}.bak
mv $HOME/.tmux.conf ${backup_dir}/.tmux.conf_${bak_uuid}.bak
mv $HOME/.xinitrc ${backup_dir}/.xinitrc_${bak_uuid}.bak
mv $HOME/.xprofile ${backup_dir}/.xprofile_${bak_uuid}.bak
mv $HOME/.yarnrc ${backup_dir}/.yarnrc_${bak_uuid}.bak
mv $HOME/.zshrc ${backup_dir}/.zshrc_${bak_uuid}.bak


# 创建软链接
ln -s $PWD/alacritty $HOME/.config/alacritty
ln -s $PWD/betterlockscreen/betterlockscreenrc $HOME/.config/betterlockscreenrc
ln -s $PWD/bspwm $HOME/.config/bspwm
ln -s $PWD/i3 $HOME/.config/i3
ln -s $PWD/neofetch $HOME/.config/neofetch
ln -s $PWD/picom $HOME/.config/picom
ln -s $PWD/polybar $HOME/.config/polybar
ln -s $PWD/rofi $HOME/.config/rofi
ln -s $PWD/sxhkd $HOME/.config/sxhkd
ln -s $PWD/.gitconfig $HOME/.gitconfig
ln -s $PWD/.ideavimrc $HOME/.ideavimrc
ln -s $PWD/.npmrc $HOME/.npmrc
ln -s $PWD/.tmux.conf $HOME/.tmux.conf
ln -s $PWD/.xinitrc $HOME/.xinitrc
ln -s $PWD/.xprofile $HOME/.xprofile
ln -s $PWD/.yarnrc $HOME/.yarnrc
ln -s $PWD/.zshrc $HOME/.zshrc

echo "dofitfile 安装完成, 旧文件备份在 ${backup_dir} 目录下"
