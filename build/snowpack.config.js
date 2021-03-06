// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  exclude: [
    "**/java/**/*",
    "**/node_modules/**/*",
  ],
  plugins: [
    '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    polyfillNode: true,
    external: [
      // ignore `import fs from 'fs'` etc
      ...require('module').builtinModules,
      // ignore things specified in pkg.dependencies, so that
      // only pkg.devDependencies get handled by Snowpack
      // (this can drastically reduce the size of a deployed
      // app, since you can deploy an already-optimized
      // web_modules and a tiny node_modules, instead of
      // having web_modules duplicated in a huge node_modules)
      
      //...Object.keys(require('./package.json').dependencies)
      ],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
