# react-fluxible-i18n
Simple i18n translation and localization components and helpers for React+Fluxible applications.

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Note: If you are not using Fluxible, you can use [react-i18nify](https://github.com/zoover/react-i18nify) instead.
If you are using Redux, you can use [react-redux-i18n](https://github.com/zoover/react-redux-i18n) instead.

## Preparation

First install the package:
```
npm i react-fluxible-i18n --save
```

Secondly, register the `I18nStore` in your app:
```javascript
var Fluxible = require('fluxible');
var I18nStore = require('react-fluxible-i18n').I18nStore;

const app = new Fluxible({
  // ...
});

app.registerStore(I18nStore);
```

Finally, set the translations and locales to be used, by dispatching events:
```javascript
context.dispatch('SET_TRANSLATIONS', {
  en: {
    application: {
      title: 'Awesome app with i18n!',
      hello: 'Hello, %{name}!'
    },
    date: {
      long: 'MMMM Do, YYYY'
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: 'Line 1<br />Line 2'
  },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!'
    },
    date: {
      long: 'D MMMM YYYY'
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2'
  }
});

context.dispatch('SET_LOCALE', 'nl');
```

Now you're all set up to start unleashing the power of `react-fluxible-i18n`!

## Components

The easiest way to translate or localize in your React components is by using the `Translate` and `Localize` components:
```javascript
var React = require('react');
var Translate = require('react-i18nify').Translate;
var Localize = require('react-i18nify').Localize;

var AwesomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Translate value="application.title"/>
          // => returns '<span>Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.title" style={{ fontWeight: 'bold', fontSize: '14px' }} />
        // => returns '<span style="font-weight:bold;font-size:14px;">Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.hello" name="Aad"/>
          // => returns '<span>Hallo, Aad!</span>' for locale 'nl'
        <Localize value="2015-09-03" dateFormat="date.long"/>
          // => returns '<span>3 september 2015</span> for locale 'nl'
        <Localize value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
          // => returns '<span>€ 3,33</span> for locale 'nl'
        <Translate value="export" count={1} />
          // => returns '<span>Exporteer 1 ding</span> for locale 'nl'
        <Translate value="export" count={2} />
          // => returns '<span>Exporteer 2 dingen</span> for locale 'nl'
        <Translate value="two_lines" dangerousHTML />
          // => returns '<span>Regel 1<br />Regel 2</span>'
      </div>
    );
  }
});
```

## Helpers

If for some reason, you cannot use the components, you can use the `I18n.t` and `I18n.l` helpers instead:
```javascript
var I18n = require('react-i18nify').I18n;

I18n.t('application.title'); // => returns 'Toffe app met i18n!' for locale 'nl'
I18n.t('application.hello', {name: 'Aad'}); // => returns 'Hallo, Aad!' for locale 'nl'
I18n.t('export', {count: 0}); // => returns 'Niks te exporteren' for locale 'nl'
I18n.t('application.weird_key'); // => returns 'Weird key' as translation is missing
I18n.t('application', {name: 'Aad'}); // => returns {hello: "Hallo, Aad!", title: "Toffe app met i18n!"} for locale 'nl'

I18n.l(1385856000000, { dateFormat: 'date.long' }); // => returns '1 december 2013' for locale 'nl'
I18n.l(Math.PI, { maximumFractionDigits: 2 }); // => returns '3,14' for locale 'nl'
```

## Supported localize options

The localize component and helper support all date formatting options as provided by the Javascript `moment` library. For the full list of options, see http://momentjs.com/docs/#/displaying/format/.

For number formatting, the localize component and helper support all options as provided by the Javascript built-in `Intl.NumberFormat` object. For the full list of options, see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat.

[downloads-image]: http://img.shields.io/npm/dm/react-fluxible-i18n.svg

[npm-url]: https://npmjs.org/package/react-fluxible-i18n
[npm-image]: http://img.shields.io/npm/v/react-fluxible-i18n.svg
