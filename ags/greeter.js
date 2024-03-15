const main = '/tmp/ags/greeter.js';
const entry = `${App.configDir}/greeter/index.ts`;

try {
  await Utils.execAsync([
    `${App.configDir}/node_modules/.bin/bun`,
    'build',
    entry,
    '--outfile',
    main,
    '--external',
    'resource://*',
    '--external',
    'gi://*',
    '--external',
    'file://*',
  ]);
} catch (error) {
  console.error(error);
  App.quit();
}

const { default: config } = await import(`file://${main}`);
export default config;
