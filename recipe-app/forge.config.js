module.exports = {
  packagerConfig: {
    dir: './electron',
    out: './release',
    asar: true,
    icon: './media/busy_bites_logo'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32', 'darwin', 'linux'],
    }
  ]
};