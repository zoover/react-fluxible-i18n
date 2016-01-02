'use strict';

const React = require('react');
const Translate = require('./Translate');
const I18nStore = require('./I18nStore');
const moment = require('moment');
const intlLocalesSupported = require('intl-locales-supported');
const IntlPolyfill = require('intl');


function _fetchFromObject(object, prop) {
  let _index;
  if (typeof object === 'undefined') {
    throw 'not found';
  }
  _index = prop.indexOf('.');
  if (_index > -1) {
    return _fetchFromObject(object[prop.substring(0, _index)], prop.substr(_index + 1));
  }
  return object[prop];
}

module.exports = {
  _context: null,
  
  _initialized: false,
  
  setContext(context){
    this._context = context;
  },
  
  t: function(key){
    const locale = this._context.getStore(I18nStore).getLocale();
    const translations = this._context.getStore(I18nStore).getTranslations();
    return this._translate(key, locale, translations);
  },
  
  _translate(key, locale, translations) {
    try {
      return _fetchFromObject(translations, locale + '.' + key);
    } catch (err) {
      console.error('I18n: Translation ' + locale + '.' + key + ' not found');
      return locale + '.' + key;
    }
  },
  
  l: function(value, options){
    const locale = this._context.getStore(I18nStore).getLocale();
    return this._localize(value, options, locale);
  },
  
  _localize: function(value, options, locale){
    if (!this._initialized){
      this._initialize(locale);
    }
    if (typeof value === 'number') {
      return new Intl.NumberFormat(locale, options).format(value);
    }

    console.error('I18n: Localization of ' + value + ' failed, not a number');
    
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
  }
};