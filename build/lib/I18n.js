'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _momentWithLocalesMin = require('moment/min/moment-with-locales.min.js');

var _momentWithLocalesMin2 = _interopRequireDefault(_momentWithLocalesMin);

var _intl = require('intl');

var _intl2 = _interopRequireDefault(_intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  _initialized: false,
  _store: null,

  t: function t(key) {
    var replacements = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (this._store) {
      var store = this._store;
      return this._translate(key, store.getLocale(), store.getTranslations(), replacements);
    }
    return key;
  },
  _translate: function _translate(key, locale, translations) {
    var replacements = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var translation = '';
    try {
      translation = this._fetchTranslation(translations, locale + '.' + key);
    } catch (err) {
      console.error('I18n: Translation ' + locale + '.' + key + ' not found');
      return key;
    }
    Object.keys(replacements).forEach(function (replacement) {
      translation = translation.split('%{' + replacement + '}').join(replacements[replacement]);
    });
    return translation;
  },
  l: function l(value, options) {
    if (this._store) {
      return this._localize(value, options, this._store.getLocale());
    }
    return value;
  },
  _localize: function _localize(value, options, locale) {
    if (!this._initialized) {
      this._initialize(locale);
    }
    if ('dateFormat' in options) {
      return (0, _momentWithLocalesMin2.default)(value).format(this.t(options.dateFormat));
    }
    if (typeof value === 'number') {
      return new Intl.NumberFormat(locale, options).format(value);
    }
    console.error('I18n: Localization of ' + value + ' failed');
    return value;
  },
  _initialize: function _initialize(locale) {
    _momentWithLocalesMin2.default.locale(locale); // set moment to the right locale
    // polyfill Intl if needed
    if (global.Intl) {
      if (!(Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf(locale).length === 1)) {
        Intl.NumberFormat = _intl2.default.NumberFormat;
      }
    } else {
      global.Intl = _intl2.default;
    }
    this._initialized = true;
  },
  _fetchTranslation: function _fetchTranslation(translations, key) {
    var _index = key.indexOf('.');
    if (typeof translations === 'undefined') {
      throw new Error('not found');
    }
    if (_index > -1) {
      return this._fetchTranslation(translations[key.substring(0, _index)], key.substr(_index + 1));
    }
    if (translations[key]) {
      return translations[key];
    }
    throw new Error('not found');
  }
};