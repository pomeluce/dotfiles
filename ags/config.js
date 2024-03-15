const v = {
  ags: pkg.version?.split('.').map(Number) || [0, 0, 0],
  expect: [1, 8, 0],
};

const mismatch = () => {
  print(`这个配置至少需要 ags 版本: v${v.expect.join('.')}, 当前版本: v${v.ags.join('.')}`);
  App.connect('config-parsed', app => app.Quit());
  return {};
};

const check = () => {
  if (v.ags[1] < v.expect[1]) return false;

  if (v.ags[2] < v.expect[2]) return false;

  return true;
};

const outfile = '/tmp/ags/main.js';
const main = `${App.configDir}/main.ts`;

try {
  await Utils.execAsync([
    `${App.configDir}/node_modules/.bin/bun`,
    'build',
    main,
    '--outfile',
    outfile,
    '--external',
    'resource://*',
    '--external',
    'gi://*',
    '--external',
    'file://*',
  ]);
} catch (err) {
  console.error(err);
  App.quit();
}

export default check() ? (await import(`file://${outfile}`)).default : mismatch();
