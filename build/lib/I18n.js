'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _intl = require('intl');

var _intl2 = _interopRequireDefault(_intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  _initialized: false,
  _store: null,

  t: function t(key) {
    if (this._store) {
      return this._translate(key, this._store.getLocale(), this._store.getTranslations());
    }
    return key;
  },
  _translate: function _translate(key, locale, translations) {
    try {
      return this._fetchTranslation(translations, locale + '.' + key);
    } catch (err) {
      console.error('I18n: Translation ' + locale + '.' + key + ' not found');
      return key;
    }
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
      return (0, _moment2.default)(value).format(this.t(options.dateFormat));
    }
    if (typeof value === 'number') {
      return new Intl.NumberFormat(locale, options).format(value);
    }
    console.error('I18n: Localization of ' + value + ' failed');
    return value;
  },
  _initialize: function _initialize(locale) {
    _moment2.default.locale(locale); // set moment to the right locale
    // polyfill Intl if needed
    if (global.Intl) {
      if (!Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf(locale).length === 1 || !(Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf(locale).length === 1)) {
        Intl.NumberFormat = _intl2.default.NumberFormat;
        Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
      }
    } else {
      global.Intl = _intl2.default;
    }
    this._initialized = true;
  },
  _fetchTranslation: function _fetchTranslation(translations, key) {
    var _index = undefined;
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