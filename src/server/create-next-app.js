const next = require('next');
const nextConfig = require('../next.config');
const { runtimeConfig } = require('./runtime-config');

function createNextApp() {
  return next({
    dev: runtimeConfig.isDevMode,
    dir: './src',
    conf: nextConfig,
  });
}

module.exports.createNextApp = createNextApp;
