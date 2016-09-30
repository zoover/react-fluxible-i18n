/* eslint no-underscore-dangle: "off" */

import BaseStore from 'fluxible/addons/BaseStore';
import { I18n } from 'react-i18nify';

export default class I18nStore extends BaseStore {
  static storeName = 'I18nStore';
  static handlers = {
    SET_LOCALE: 'handleSetLocale',
    SET_TRANSLATIONS: 'handleSetTranslations',
    /**
     * @deprecated
     */
    LOAD_TRANSLATIONS: 'handleSetTranslations',
  };

  constructor(dispatcher) {
    super(dispatcher);
    this._setLocale('en');
    this._setTranslations({});
  }

  handleSetLocale(locale) {
    this._setLocale(locale);
    this.emitChange();
  }

  handleSetTranslations(translations) {
    this._setTranslations(translations);
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
    this._setTranslations(translations);
  }

  _setLocale(locale) {
    this.locale = locale;
    I18n.setLocale(this.locale);
  }

  _setTranslations(translations) {
    this.translations = translations;
    I18n.setTranslations(this.translations);
  }
}
