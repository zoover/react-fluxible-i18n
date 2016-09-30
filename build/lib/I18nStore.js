'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseStore2 = require('fluxible/addons/BaseStore');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _reactI18nify = require('react-i18nify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle: "off" */

var I18nStore = function (_BaseStore) {
  _inherits(I18nStore, _BaseStore);

  function I18nStore(dispatcher) {
    _classCallCheck(this, I18nStore);

    var _this = _possibleConstructorReturn(this, (I18nStore.__proto__ || Object.getPrototypeOf(I18nStore)).call(this, dispatcher));

    _this._setLocale('en');
    _this._setTranslations({});
    return _this;
  }

  _createClass(I18nStore, [{
    key: 'handleSetLocale',
    value: function handleSetLocale(locale) {
      this._setLocale(locale);
      this.emitChange();
    }
  }, {
    key: 'handleSetTranslations',
    value: function handleSetTranslations(translations) {
      this._setTranslations(translations);
      this.emitChange();
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: 'getTranslations',
    value: function getTranslations() {
      return this.translations;
    }
  }, {
    key: 'dehydrate',
    value: function dehydrate() {
      return {
        locale: this.locale,
        translations: this.translations
      };
    }
  }, {
    key: 'rehydrate',
    value: function rehydrate(_ref) {
      var locale = _ref.locale;
      var translations = _ref.translations;

      this._setLocale(locale);
      this._setTranslations(translations);
    }
  }, {
    key: '_setLocale',
    value: function _setLocale(locale) {
      this.locale = locale;
      _reactI18nify.I18n.setLocale(this.locale);
    }
  }, {
    key: '_setTranslations',
    value: function _setTranslations(translations) {
      this.translations = translations;
      _reactI18nify.I18n.setTranslations(this.translations);
    }
  }]);

  return I18nStore;
}(_BaseStore3.default);

I18nStore.storeName = 'I18nStore';
I18nStore.handlers = {
  SET_LOCALE: 'handleSetLocale',
  SET_TRANSLATIONS: 'handleSetTranslations',
  /**
   * @deprecated
   */
  LOAD_TRANSLATIONS: 'handleSetTranslations'
};
exports.default = I18nStore;