# ember-display-in-browser

Display browser specific content.

### Why? 🤔

Say you are developing an application that makes use of features that are not available
in IE. You can make use of this addon to display a message asking the user to use a browser
other than IE.

### This is a bad idea! 😠

This addon has some valid use cases(like I explained in the `why` section). However, you should
prefer to **make use of feature checks** instead of relying on the User Agent.

Even though this addon lets you specify several browsers alone, please do not develop an app that supports
Chrome(or Safari) alone. **Compatibility matters**.

### Installation 🔧

`ember install ember-display-in-browser`

### Usage 💻

* To display only in one or a set of browsers,

```handlebars
  {{!-- arrayOfBrowsers = ["Chrome", "firefox"] --}}
  {{#display-in-browser only=arrayOfBrowsers}}
    <p>This will be visible only in Chrome and Firefox</p>
  {{/display-in-browser}}
```

```handlebars
  {{#display-in-browser only="ie"}}
    <p>This will be visible only in Internet Explorer</p>
  {{/display-in-browser}}
```

* To display in browsers other than one or more browsers,

```handlebars
  {{!-- arrayOfBrowsers = ["Chrome", "firefox"] --}}
  {{#display-in-browser except=arrayOfBrowsers}}
    <p>This will not be visible in Chrome and Firefox</p>
  {{/display-in-browser}}
```

```handlebars
  {{!-- arrayOfBrowsers = ["ie", "mobile"] --}}
  {{#display-in-browser except=arrayOfBrowsers}}
    <p>This will not be visible in IE and Mobile browsers</p>
  {{/display-in-browser}}

  {{#display-in-browser except="ie"}}
    <p>This will not be visible in IE.</p>
  {{/display-in-browser}}
```

* To display in all browsers,

```handlebars
  {{#display-in-browser all=all}}
    <p>This will be visible in all browsers</p>
  {{/display-in-browser}}

  {{!-- You can also pass as a string, if needed --}}
  {{#display-in-browser all="true"}}
    <p>This will be visible in all browsers</p>
  {{/display-in-browser}}
```

* To display in no browser,

```handlebars
  {{#display-in-browser none="true"}}
    <p>This will not be visible in any browser</p>
  {{/display-in-browser}}
```

Supported browsers - `'chrome', 'firefox', 'safari', 'opera', 'ie', 'edge', 'blink', 'mobile'`(case-insensitive).

Inspired by [react-render-in-browser](https://github.com/flexdinesh/react-display-in-browser).

### License

MIT @[Sivasubramanyam A](https://sivasubramanyam.me)
