const express = require('express');
const cookieParser = require('cookie-parser');

const { routes } = require('../mechanisms/routing');
const { localeMiddleware } = require('../mechanisms/l10n/server/middlewares/locale');
const { l10nFactory } = require('../mechanisms/l10n/server/middlewares/l10n');

function createExpressApp(nextApp, localeCache) {
  const routing = routes.getRequestHandler(nextApp);

  return express()
    .use(cookieParser())
    .use(localeMiddleware, l10nFactory(localeCache))
    .use(routing);
}

module.exports.createExpressApp = createExpressApp;
