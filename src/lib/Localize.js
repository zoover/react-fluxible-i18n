import React from 'react';
import I18n from './I18n';
import connectToStores from 'fluxible-addons-react/connectToStores';

class Localize extends React.Component {
  render() {
    return React.createElement(
      'span',
      {},
      I18n._localize(
        this.props.value,
        this.props.dateFormat ? { dateFormat: this.props.dateFormat } : this.props.options,
        this.props.locale
      )
    );
  }
}

Localize.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.object]).isRequired,
  options: React.PropTypes.object,
  dateFormat: React.PropTypes.string,
  locale: React.PropTypes.string.isRequired,
};

export default connectToStores(Localize, ['I18nStore'], (context) => ({
  locale: context.getStore('I18nStore').getLocale(),
}));
