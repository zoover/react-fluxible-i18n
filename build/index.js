'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Localize = exports.Translate = exports.I18n = exports.I18nStore = undefined;

var _I18nStore = require('./lib/I18nStore');

var _I18nStore2 = _interopRequireDefault(_I18nStore);

var _I18n = require('./lib/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _Translate = require('./lib/Translate');

var _Translate2 = _interopRequireDefault(_Translate);

var _Localize = require('./lib/Localize');

var _Localize2 = _interopRequireDefault(_Localize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.I18nStore = _I18nStore2.default;
exports.I18n = _I18n2.default;
exports.Translate = _Translate2.default;
exports.Localize = _Localize2.default;