local platform = require('utils.platform')()

return {
  default_domain = platform.is_windows and 'WSL:ArchLinux' or 'local',
  ssh_domains = {
    {
      -- The connection is an ssh connection, don't use any multiplexing.
      multiplexing = 'None',

      -- The name of this specific domain. Must be unique amongst
      name = 'ConeCloud',

      -- identifies the host:port pair of the remote server
      -- Can be a DNS name or an IP address with an optional
      -- ":port" on the end.
      remote_address = '74.48.74.108:2200',

      -- Whether agent auth should be disabled.
      -- Set to true to disable it.
      -- no_agent_auth = false,

      -- The username to use for authenticating with the remote host
      username = 'flx',

      -- Specify a SSH connection authentication file
      -- Default authentication file is "~/.ssh/id_rsa"
      ssh_option = {
        identityfile = '~/.ssh/id_ssh',
      },
    },
  },
  wsl_domains = {
    {
      name = 'WSL:ArchLinux',
      distribution = 'ArchLinux',
      username = 'lucas',
      default_cwd = '/home/lucas',
      default_prog = { 'zsh' },
    },
  },
}
