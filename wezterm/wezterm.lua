local wezterm = require('wezterm')
local colors = require('colors.monokai-pro')
local config = wezterm.config_builder()

local function is_windows()
  local uname = io.popen('uname -s', 'r'):read('*l')
  return uname and uname:lower():find('windows') ~= nil
end

config.colors = colors
-- windows 环境显示 tabs
config.enable_tab_bar = is_windows()
-- note: 关闭 wayland 环境, 修复 hyprland 打不开的 bug, 待程序修复(fix!)
config.enable_wayland = false
-- windows 环境使用 wsl
config.default_domain = is_windows() and 'WSL:ArchLinux' or 'local'
-- 字体
config.font = wezterm.font('CaskaydiaMono Nerd Font Mono')
config.font_size = 14

-- 透明模糊, linux 取决于合成器
-- config.window_background_opacity = 0.9
-- config.macos_window_background_blur = 20 -- macos
-- config.win32_system_backdrop = 'Mica' -- windows

-- 标题栏隐藏
config.window_decorations = 'RESIZE'
-- 内边距
config.window_padding = {
  left = 35,
  right = 35,
  top = 30,
  bottom = 20,
}

return config
