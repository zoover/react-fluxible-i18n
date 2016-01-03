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
      } 
    },
    nl: {
      application: {
        title: 'Toffe app met i18n!'
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

FancyHeader = React.createClass({
  render: function() {
    return (
      <h1>
        <Translate value="application.title"/>
      </h1>
    );
  }
});
```

If for some reason, you cannot use the component, you can use the `I18n.t` helper instead:
```javascript
import React from 'react';
import {I18n} from 'react-fluxible-i18n';

FancyInput = React.createClass({
  render: function() {
    return (
      <input placeholder={I18n.t('application.title')}/>
    );
  }
});
```

### Localize

Currently, this library only supports localizing numbers. The prefered way of doing this is by using the `Localize` component:
```javascript
import React from 'react';
import {Localize} from 'react-fluxible-i18n';

FancyCurrency = React.createClass({
  render: function() {
    return (
      <div>
        <Localize value={10/3} options={{currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
      </div>
    );
  }
});
```

Again, if for some reason, you cannot use the component, there is the `I18n.l` helper to help you out:
```javascript
import React from 'react';
import {I18n} from 'react-fluxible-i18n';

FancyMeta = React.createClass({
  render: function() {
    return (
      <meta name="description" content={I18n.l(Math.PI, {maximumFractionDigits: 2})}/>
    );
  }
});
```

The localize component and helper support all options as provided by the Javascript built-in `Intl.NumberFormat` object. For the full list of options, see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat.

## Future plans

* Replacements for translations, e.g.: `Good morning, %{name}!`
* Localization of dates and times
