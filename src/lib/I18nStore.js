/* eslint no-underscore-dangle: "off" */

import BaseStore from 'fluxible/addons/BaseStore';
import { I18n } from 'react-i18nify';

export default class I18nStore extends BaseStore {
  static storeName = 'I18nStore';
  static handlers = {
    SET_LOCALE: 'handleSetLocale',
    LOAD_TRANSLATIONS: 'handleLoadTranslations',
  };

  constructor(dispatcher) {
    super(dispatcher);
    this._setLocale('en');
    this._loadTranslations({});
  }

  handleSetLocale(locale) {
    this._setLocale(locale);
    this.emitChange();
  }

  handleLoadTranslations(translations) {
    this._loadTranslations(translations);
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
      translations: this.translations,
    };
  }

  rehydrate({ locale, translations }) {
    this._setLocale(locale);
    this._loadTranslations(translations);
  }

  _setLocale(locale) {
    this.locale = locale;
    I18n.setLocale(this.locale);
  }

  _loadTranslations(translations) {
    this.translations = translations;
    I18n.loadTranslations(this.translations);
  }
}
