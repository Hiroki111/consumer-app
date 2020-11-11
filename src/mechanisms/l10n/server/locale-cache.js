const { readFileSync } = require('fs');
const l10nConfig = require('../config');
const { transform } = require('./transform-dictionary');

class LocaleCache {
  constructor() {
    this._messages = new Map();
  }

  populate() {
    l10nConfig.supportedLocales.forEach(locale => {
      this._messages.set(locale, transform(require(`../../l10n/dictionary/${locale}.json`)));
    });
  }

  getMessages(locale) {
    return this._messages.get(locale);
  }
}

module.exports.LocaleCache = LocaleCache;
