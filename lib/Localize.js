'use strict';

const React = require('react');
const I18n = require('./I18n');
const connectToStores = require('fluxible-addons-react/connectToStores');

let Localize = React.createClass({
  propTypes: {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object]).isRequired,
    options: React.PropTypes.object,
    locale: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('span', {}, I18n._localize(this.props.value, this.props.options, this.props.locale));
  }
});

Localize = connectToStores(Localize, ['I18nStore'], (context) => ({
  locale: context.getStore('I18nStore').getLocale()
}));

module.exports = Localize;
