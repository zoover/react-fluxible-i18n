import moment from 'moment';
import intlLocalesSupported from 'intl-locales-supported';
import IntlPolyfill from 'intl';

export default {
  _initialized: false,
  _store: null,

  t(key) {
    if (this._store) {
      return this._translate(key, this._store.getLocale(), this._store.getTranslations());
    }
    return key;
  },

  _translate(key, locale, translations) {
    try {
      return this._fetchTranslation(translations, locale + '.' + key);
    } catch (err) {
      console.error('I18n: Translation ' + locale + '.' + key + ' not found');
      return key;
    }
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
    console.error('I18n: Localization of ' + value + ' failed');
    return value;
  },

  _initialize(locale) {
    moment.locale(locale); // set moment to the right locale
    if (!intlLocalesSupported(locale)) {
      // Browser doens't support locale, use polyfill instead
      require('intl/locale-data/jsonp/' + locale + '.js');
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
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
  }
};
