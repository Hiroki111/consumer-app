// Adds support for Intl API on Node.js.
// See: http://formatjs.io/guides/runtime-environments/#server
const areIntlLocalesSupported = require('intl-locales-supported');
const l10nConfig = require('../../l10n/config');

const { supportedLocales } = l10nConfig;

const intlPolyfill = {
  apply() {
    if (global.Intl) {
      if (!areIntlLocalesSupported(supportedLocales)) {
        var IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
      }
    } else {
      global.Intl = require('intl');
    }
  },
};

module.exports.intlPolyfill = intlPolyfill;
