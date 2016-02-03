import moment from 'moment/min/moment-with-locales';
import IntlPolyfill from 'intl';

export default {
  _initialized: false,
  _store: null,

  t(key, replacements = {}) {
    if (this._store) {
      const store = this._store;
      return this._translate(key, store.getLocale(), store.getTranslations(), replacements);
    }
    return key;
  },

  _translate(key, locale, translations, replacements = {}) {
    let translation = '';
    try {
      translation = this._fetchTranslation(translations, `${locale}.${key}`);
    } catch (err) {
      console.error(`I18n: Translation ${locale}.${key} not found`);
      return key;
    }
    Object.keys(replacements).forEach(replacement => {
      translation = translation.split(`%{${replacement}}`).join(replacements[replacement]);
    });
    return translation;
  },

  l(value, options) {
    if (this._store) {
      return this._localize(value, options, this._store.getLocale());
    }
    return value;
  },

  _localize(value, options, locale) {
    if (!this._initialized) {
      this._initialize(locale);
    }
    if ('dateFormat' in options) {
      return moment(value).format(this.t(options.dateFormat));
    }
    if (typeof value === 'number') {
      return new Intl.NumberFormat(locale, options).format(value);
    }
    console.error(`I18n: Localization of ${value} failed`);
    return value;
  },

  _initialize(locale) {
    moment.locale(locale); // set moment to the right locale
    // polyfill Intl if needed
    if (global.Intl) {
      if (!(Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf(locale).length === 1)) {
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
      }
    } else {
      global.Intl = IntlPolyfill;
    }
    this._initialized = true;
  },

  _fetchTranslation(translations, key) {
    let _index;
    if (typeof translations === 'undefined') {
      throw new Error('not found');
    }
    _index = key.indexOf('.');
    if (_index > -1) {
      return this._fetchTranslation(translations[key.substring(0, _index)], key.substr(_index + 1));
    }
    if (translations[key]) {
      return translations[key];
    }
    throw new Error('not found');
  },
};
