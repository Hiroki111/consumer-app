// Adds support for Intl API on Node.js.
// See: http://formatjs.io/guides/runtime-environments/#server
import areIntlLocalesSupported from 'intl-locales-supported';
import l10nConfig from '../../l10n/config';

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

export { intlPolyfill };
