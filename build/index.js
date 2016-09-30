'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _I18nStore = require('./lib/I18nStore');

Object.defineProperty(exports, 'I18nStore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_I18nStore).default;
  }
});

var _reactI18nify = require('react-i18nify');

Object.defineProperty(exports, 'I18n', {
  enumerable: true,
  get: function get() {
    return _reactI18nify.I18n;
  }
});
Object.defineProperty(exports, 'Translate', {
  enumerable: true,
  get: function get() {
    return _reactI18nify.Translate;
  }
});
Object.defineProperty(exports, 'Localize', {
  enumerable: true,
  get: function get() {
    return _reactI18nify.Localize;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }