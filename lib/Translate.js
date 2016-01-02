'use strict';

const React = require('react');
const I18n = require('./I18n');
const connectToStores = require('fluxible-addons-react/connectToStores');

let Translate = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    locale: React.PropTypes.string.isRequired,
    translations: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement('span', {}, I18n._translate(this.props.value, this.props.locale, this.props.translations));
  }
});

Translate = connectToStores(Translate, ['I18nStore'], (context) => ({
  locale: context.getStore('I18nStore').getLocale(),
  translations: context.getStore('I18nStore').getTranslations()
}));

module.exports = Translate;
