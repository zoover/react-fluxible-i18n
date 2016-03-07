'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _I18n = require('./I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _connectToStores = require('fluxible-addons-react/connectToStores');

var _connectToStores2 = _interopRequireDefault(_connectToStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Translate = function (_React$Component) {
  _inherits(Translate, _React$Component);

  function Translate() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Translate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Translate)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.otherProps = function () {
      var result = _extends({}, _this.props);
      delete result.value;
      delete result.locale;
      delete result.translations;
      return result;
    }, _this.render = function () {
      return _react2.default.createElement('span', {}, _I18n2.default._translate(_this.props.value, _this.props.locale, _this.props.translations, _this.otherProps()));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Translate;
}(_react2.default.Component);

Translate.propTypes = {
  value: _react2.default.PropTypes.string.isRequired,
  locale: _react2.default.PropTypes.string.isRequired,
  translations: _react2.default.PropTypes.object.isRequired
};
exports.default = (0, _connectToStores2.default)(Translate, ['I18nStore'], function (context) {
  return {
    locale: context.getStore('I18nStore').getLocale(),
    translations: context.getStore('I18nStore').getTranslations()
  };
});