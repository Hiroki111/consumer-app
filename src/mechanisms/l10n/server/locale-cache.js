import { readFileSync } from 'fs';
import l10nConfig from '../config';
import { transform } from './transform-dictionary';

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

export { LocaleCache };
