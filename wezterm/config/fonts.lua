local wezterm = require('wezterm')
local platform = require('utils.platform')()

return {
  font = wezterm.font('CaskaydiaMono Nerd Font Mono'),
  font_size = platform.is_linux and 20 or 12,
}
