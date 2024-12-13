local wezterm = require('wezterm')
local colors = require('colors.monokai-pro')

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

return {

  colors = colors,
  -- windows 环境使用 wsl
  default_domain = is_windows and 'WSL:ArchLinux' or 'local',
  -- windows 环境显示 tabs
  enable_tab_bar = is_windows,
  -- 字体
  font = wezterm.font('CaskaydiaMono Nerd Font Mono'),
  font_size = 22,
  -- 标题栏隐藏
  window_decorations = is_linux and 'NONE' or 'RESIZE',
  -- 内边距
  window_padding = {
    left = 35,
    right = 35,
    top = 25,
    bottom = 10,
  },
}
