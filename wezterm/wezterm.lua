local wezterm = require('wezterm')
local colors = require('colors.monokai-pro')
local config = wezterm.config_builder()

--- platform 环境判断
---@param os_name string platform name
---@return boolean result judgment results
local function is_platform(os_name)
  if os_name == nil then
    return false
  end
  local name = os_name:lower()
  if package.config:sub(1, 1) == '\\' then
    return name == 'windows'
  elseif io.popen('uname -s', 'r') then
    local uname = io.popen('uname -s', 'r'):read('*l'):lower()
    return uname == 'darwin' and uname == 'macos' or uname == name
  else
    return false
  end
end

local is_windows = is_platform('windows')
local is_linux = is_platform('linux')

config.colors = colors
-- windows 环境使用 wsl
config.default_domain = is_windows and 'WSL:ArchLinux' or 'local'
-- windows 环境显示 tabs
config.enable_tab_bar = is_windows
-- 字体
config.font = wezterm.font('CaskaydiaMono Nerd Font Mono')
config.font_size = 22

-- 透明模糊, linux 取决于合成器
-- config.window_background_opacity = 0.9
-- config.macos_window_background_blur = 20 -- macos
-- config.win32_system_backdrop = 'Mica' -- windows

-- 标题栏隐藏
config.window_decorations = is_linux and 'NONE' or 'RESIZE'
-- 内边距
config.window_padding = {
  left = 35,
  right = 35,
  top = 25,
  bottom = 10,
}

return config
