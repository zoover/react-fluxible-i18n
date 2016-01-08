'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Localize = function (_React$Component) {
  _inherits(Localize, _React$Component);

  function Localize() {
    _classCallCheck(this, Localize);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Localize).apply(this, arguments));
  }

  _createClass(Localize, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', {}, _I18n2.default._localize(this.props.value, this.props.dateFormat ? { dateFormat: this.props.dateFormat } : this.props.options, this.props.locale));
    }
  }]);

  return Localize;
}(_react2.default.Component);

Localize.propTypes = {
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.object]).isRequired,
  options: _react2.default.PropTypes.object,
  dateFormat: _react2.default.PropTypes.string,
  locale: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _connectToStores2.default)(Localize, ['I18nStore'], function (context) {
  return {
    locale: context.getStore('I18nStore').getLocale()
  };
});