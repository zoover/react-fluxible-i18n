import React from 'react';
import I18n from './I18n';
import connectToStores from 'fluxible-addons-react/connectToStores';

class Translate extends React.Component {

  otherProps() {
    const result = { ...this.props };
    delete result.value;
    delete result.locale;
    delete result.translations;
    return result;
  }

  render() {
    return React.createElement(
      'span',
      {},
      I18n._translate(
        this.props.value,
        this.props.locale,
        this.props.translations,
        this.otherProps()
      )
    );
  }
}

Translate.propTypes = {
  value: React.PropTypes.string.isRequired,
  locale: React.PropTypes.string.isRequired,
  translations: React.PropTypes.object.isRequired,
};

export default connectToStores(Translate, ['I18nStore'], (context) => ({
  locale: context.getStore('I18nStore').getLocale(),
  translations: context.getStore('I18nStore').getTranslations(),
}));
