import express from 'express';
import cookieParser from 'cookie-parser';

import { routes } from '../mechanisms/routing';
import { localeMiddleware } from '../mechanisms/l10n/server/middlewares/locale';
import { l10nFactory } from '../mechanisms/l10n/server/middlewares/l10n';

function createExpressApp(nextApp, localeCache) {
  const routing = routes.getRequestHandler(nextApp);

  return express()
    .use(cookieParser())
    .use(localeMiddleware, l10nFactory(localeCache))
    .use(routing);
}

export { createExpressApp };
