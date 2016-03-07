'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseStore2 = require('fluxible/addons/BaseStore');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _I18n = require('./I18n');

var _I18n2 = _interopRequireDefault(_I18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var I18nStore = function (_BaseStore) {
  _inherits(I18nStore, _BaseStore);

  function I18nStore(dispatcher) {
    _classCallCheck(this, I18nStore);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(I18nStore).call(this, dispatcher));

    _this.locale = 'en';
    _this.translations = {};
    _I18n2.default._store = _this;
    return _this;
  }

  _createClass(I18nStore, [{
    key: 'setLocale',
    value: function setLocale(loc) {
      this.locale = loc;
      this.emitChange();
    }
  }, {
    key: 'loadTranslations',
    value: function loadTranslations(translations) {
      this.translations = translations;
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
    value: function rehydrate(state) {
      this.locale = state.locale;
      this.translations = state.translations;
    }
  }]);

  return I18nStore;
}(_BaseStore3.default);

I18nStore.storeName = 'I18nStore';

I18nStore.handlers = {
  SET_LOCALE: 'setLocale',
  LOAD_TRANSLATIONS: 'loadTranslations'
};

exports.default = I18nStore;