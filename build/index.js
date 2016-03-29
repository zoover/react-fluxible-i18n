'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Localize = exports.Translate = exports.I18n = exports.I18nStore = undefined;

var _I18nStore = require('./lib/I18nStore');

var _I18nStore2 = _interopRequireDefault(_I18nStore);

var _reactI18nify = require('react-i18nify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.I18nStore = _I18nStore2.default;
exports.I18n = _reactI18nify.I18n;
exports.Translate = _reactI18nify.Translate;
exports.Localize = _reactI18nify.Localize;