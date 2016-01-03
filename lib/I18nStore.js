'use strict';

const BaseStore = require('fluxible/addons/BaseStore');
const I18n = require('./I18n')

class I18nStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.locale = 'en';
    this.translations = {};
    I18n._store = this;
  }

  setLocale(loc) {
    this.locale = loc;
    this.emitChange();
  }
  
  loadTranslations(translations) {
    this.translations = translations;
    this.emitChange();
  }
  
  getLocale() {
    return this.locale;
  }
  
  getTranslations() {
    return this.translations;
  }

  dehydrate() {
    return {
      locale: this.locale,
      translations: this.translations
    };
  }

  rehydrate(state) {
    this.locale = state.locale;
    this.translations = state.translations;
  }
}

I18nStore.storeName = 'I18nStore';

I18nStore.handlers = {
  'SET_LOCALE': 'setLocale',
  'LOAD_TRANSLATIONS': 'loadTranslations'
};

module.exports = I18nStore;
