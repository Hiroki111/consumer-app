import { addLocaleData } from 'react-intl';

// Register React Intl's locale data for the user's locale in the browser.
export const intlLoader = {
  async load(locale) {
    if (typeof window !== 'undefined') {
      const localeData = await import('react-intl/locale-data/' + locale);
      // Since localeData holds a module we need to pass its default to addLocaleData
      addLocaleData(localeData.default);
    }
  },
};
