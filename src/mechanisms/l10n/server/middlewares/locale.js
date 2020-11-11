const locale = require('connect-locale');
const l10Config = require('../../config');

// This is ugly way to avoid using l10n middleware for every type of request
// handled by Next
const BLACKLIST_PATH = ['/static', '/_next'];

function isPathDisallowed(path) {
  return BLACKLIST_PATH.some(blacklistedPath => path.startsWith(blacklistedPath));
}

function localeMiddleware(req, res, next) {
  if (isPathDisallowed(req.path)) {
    next('route');
    return;
  }

  return locale({
    locales: l10Config.supportedLocales,

    // Strategies where to look for the locale, in the following order:
    //   1. from the query parameter lang path http://server/path?lang={lang}
    //   2. from a cookie
    //   3. user's language/region preferences sent via the accept-language header
    //   4. first locale from the locales array as the last fallback option
    getLocaleFrom: ['query', 'cookie', 'accept-language', 'default'],

    // Cookie - to persist for later requests.
    // Request object - to use in the server rendering middleware.
    storeLocaleTo: ['cookie', 'request'],
  })(req, res, next);
}

module.exports.localeMiddleware = localeMiddleware;
