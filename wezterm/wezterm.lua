local wezterm = require('wezterm')
local colors = require('colors.monokai-pro')
local config = wezterm.config_builder()

local function is_windows()
  local uname = os.getenv('OS')
  return uname and uname:lower():find('windows') ~= nil
end

config.colors = colors
-- windows 环境显示 tabs
config.enable_tab_bar = is_windows()
-- windows 环境使用 wsl
config.default_domain = is_windows() and 'WSL:ArchLinux' or 'local'
-- 字体
config.font = wezterm.font('CaskaydiaMono Nerd Font Mono')
config.font_size = 12

-- 透明模糊, linux 取决于合成器
-- config.window_background_opacity = 0.9
-- config.macos_window_background_blur = 20 -- macos
-- config.win32_system_backdrop = 'Mica' -- windows

-- 标题栏隐藏
config.window_decorations = 'RESIZE'
-- 内边距
config.window_padding = {
  left = 15,
  right = 15,
  top = 10,
  bottom = 10,
}

return config
