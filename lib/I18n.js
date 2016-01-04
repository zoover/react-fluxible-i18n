'use strict';

const React = require('react');
const moment = require('moment');
const intlLocalesSupported = require('intl-locales-supported');
const IntlPolyfill = require('intl');

module.exports = {
  _initialized: false,
  _store: null,
  
  t: function(key){
    const locale = this._store.getLocale();
    const translations = this._store.getTranslations();
    return this._translate(key, locale, translations);
  },
  
  _translate: function(key, locale, translations) {
    try {
      return this._fetchTranslation(translations, locale + '.' + key);
    } catch (err) {
      console.error('I18n: Translation ' + locale + '.' + key + ' not found');
      return key;
    }
  },
  
  l: function(value, options){
    const locale = this._store.getLocale();
    return this._localize(value, options, locale);
  },
  
  _localize: function(value, options, locale){
    if (!this._initialized){
      this._initialize(locale);
    }
    if ('dateFormat' in options){
      return moment(value).format(this.t(options.dateFormat));
    }
    if (typeof value === 'number') {
      return new Intl.NumberFormat(locale, options).format(value);
    }
    console.error('I18n: Localization of ' + value + ' failed');
    return value;
  },
  
  _initialize: function(locale) {
    moment.locale(locale); // set moment to the righ locale
    if (!intlLocalesSupported(locale)) {
      // Browser doens't support locale, use polyfill instead
      require('intl/locale-data/jsonp/' + locale + '.js'); // load the translation file for NumberFormat polyfill
      Intl.NumberFormat = IntlPolyfill.NumberFormat; // Use polyfill functions instead of build-in ones
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat; // Use polyfill functions instead of build-in ones
    }
    this._initialized = true;
  },
  
  _fetchTranslation: function(translations, key) {
    let _index;
    if (typeof translations === 'undefined') {
      throw 'not found';
    }
    _index = key.indexOf('.');
    if (_index > -1) {
      return this._fetchTranslation(translations[key.substring(0, _index)], key.substr(_index + 1));
    }
    if (translations[key]) {
      return translations[key];
    }
    throw 'not found';
  }
};