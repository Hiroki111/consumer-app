const { createNextApp } = require('./create-next-app');
const { createExpressApp } = require('./create-express-app');
const { runtimeConfig } = require('./runtime-config');
const { intlPolyfill, LocaleCache } = require('../mechanisms/l10n/server');

class Server {
  constructor() {
    this._nextApp = null;
    this._expressApp = null;
    this._httpServer = null;
  }

  init() {
    // Polyfill the Intl API on the server
    intlPolyfill.apply();
    const localeCache = new LocaleCache();
    localeCache.populate();

    this._nextApp = createNextApp();
    this._expressApp = createExpressApp(this._nextApp, localeCache);
  }

  async start() {
    this.init();

    await this._nextApp.prepare();

    this._httpServer = this._expressApp.listen({
      host: runtimeConfig.host,
      port: runtimeConfig.port,
    });

    await new Promise((resolve, reject) => {
      this._httpServer.on('listening', resolve);
      this._httpServer.on('error', reject);
    });
  }

  // NOTE: use only after start()
  get url() {
    const { address, port } = this._httpServer.address();
    return `http://${address}:${port}`;
  }
}

module.exports['default'] = Server;
module.exports = exports['default'];
