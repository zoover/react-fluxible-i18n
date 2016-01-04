# react-fluxible-i18n
A simple i18n translation &amp; localization library for React+Fluxible applications.

## Preparation

To start using this library, first install the package:
```
npm install react-fluxible-i18n --save
```

Secondly, register the `I18nStore` in your app. Using ES6 syntax, this will look something like this:
```javascript
import Fluxible from 'fluxible';
import {I18nStore} from 'react-fluxible-i18n';

const app = new Fluxible({
  // ...
});

app.registerStore(I18nStore);
```

And finally, load translations and set the locale to be used by dispatching a `LOAD_TRANSLATIONS` and `SET_LOCALE` event, for example in the following way:
```javascript
const actionContext = app.createContext().getActionContext();

actionContext.dispatch('LOAD_TRANSLATIONS',
  {
    en: {
      application: {
        title: 'Awesome app with i18n!'
      },
      date: {
        long: 'MMMM Do, YYYY'
      }
    },
    nl: {
      application: {
        title: 'Toffe app met i18n!'
      },
      date: {
        long: 'D MMMM YYYY'
      }
    }
  }
);
actionContext.dispatch('SET_LOCALE', 'nl');
```

Now you're all set up to start unleashing the power of `react-fluxible-i18n`!

## Usage

### Translate

The prefered way to have translated texts in your app is by using the `Translate` component:
```javascript
import React from 'react';
import {Translate} from 'react-fluxible-i18n';

SomeComponent = React.createClass({
  render: function() {
    return (
      <Translate value="application.title"/>
    ); // returns '<span>Toffe app met i18n!</span>' for locale 'nl'
  }
});
```

If for some reason, you cannot use the component, you can use the `I18n.t` helper instead:
```javascript
import {I18n} from 'react-fluxible-i18n';
I18n.t('application.title'); // returns 'Toffe app met i18n!' for locale 'nl'
```

### Localize

This library supports the localization of both dates and numbers. 

#### Dates

The prefered way of localizing dates is by using the `Localize` component:
```javascript
import React from 'react';
import {Localize} from 'react-fluxible-i18n';

SomeComponent = React.createClass({
  render: function() {
    return (
      <Localize value="2015-09-03" dateFormat="date.long"/>
    ); // returns '<span>3 september 2015</span> for locale 'nl'
  }
});
```

Also here, If for some reason, you cannot use the component, there is the `I18n.l` helper to help you out:
```javascript
import {I18n} from 'react-fluxible-i18n';
I18n.l(1385856000000, {dateFormat: 'date.long'}); // returns '1 december 2013' for locale 'nl'
```

The localize component and helper support all date formatting options as provided by the Javascript `moment` library. For the full list of options, see http://momentjs.com/docs/#/displaying/format/.

#### numbers

The prefered way of localizing number is also by using the `Localize` component:
```javascript
import React from 'react';
import {Localize} from 'react-fluxible-i18n';

SomeComponent = React.createClass({
  render: function() {
    return (
      <Localize value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
    ); // returns '<span>€ 3,33</span> for locale 'nl'
  }
});
```

Again, if for some reason, you cannot use the component, the `I18n.l` helper will help you out:
```javascript
import {I18n} from 'react-fluxible-i18n';
I18n.l(Math.PI, {maximumFractionDigits: 2}); // returns '3,14' for locale 'nl'
```

The localize component and helper support all options for number formatting as provided by the Javascript built-in `Intl.NumberFormat` object. For the full list of options, see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat.

## Future plans

* Replacements for translations, e.g.: `Good morning, %{name}!`
* Add tests
