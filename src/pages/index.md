---
scripts: ['highlight.js']
styles: "
  #homepage-container {
    margin-bottom: var(--section-bottom);
  }

  #homepage-title {
    margin-bottom: 0;
  }

  #homepage-subtitle {
    font-family: 'Lora', sans-serif;
    font-style: italic;
  }
"
---

<section id="homepage-container">
  <h1 id="homepage-title">Delgada</h1>
  <p id="homepage-subtitle">
    An HTML-first web framework for building slim UIs.
  </p>
</section>

Delgada is a small HTML-first web framework for building slim multipage websites using modern web standards and conventions.

Noteworthy features include:

- Ship zero JS to the client by default with static components
- Islands of interactivity with web components
- File-system based routing
- Markdown support out of the box
- Scoped CSS support out of the box (coming soon-ish)
- Zero config with common sense defaults

## [Getting started](#getting-started)

Try getting started with the [Delgada template](https://github.com/delgada-ui/template). Install the template with the following command and then follow the directions in the project readme.

<pre>
  <code>$ <span class="select-all">npx degit delgada-ui/template my-delgada-project</span></code>
</pre>

<section class="warning-banner">
  <p class="bold">Warning: Here be dragons</p>
  <p>Delgada is not production ready software. It's prone to changes and bugs. Tread lightly if you decide to use it for building your websites.</p>
</section>

## [Concepts](#concepts)

- [Project structure](#project-structure)
- [Static components](#static-components)
- [Pages](#pages)
- [Page layouts](#page-layouts)
- [Routing](#routing)
- [Static file serving](#static-file-serving)
- [Dynamic components](#dynamic-components)

### [Project structure](#project-structure)

The structure of a Delgada website tries to follow modern web conventions and should hopefully feel straightforward and familiar to most reading this.

```
my-website/
├── public/
│   ├── favicon.png
│   └── global.css
├── src/
│   ├── components/
│   │   ├── islands/
│   │   │   └── web-component.js
│   │   └── static-component.js
│   ├── layouts/
│   │   └── blog-post.js
│   └── pages/
│       ├── blog/
│       │   ├── post-1.md
│       │   └── post-2.md
│       └── index.js
├── package.json
└── web-dev-server.config.mjs
```

At the root of the project are the `package.json` and development server config files. A `public` directory contains all the static assets and a `src` directory contains the `components`, `layouts`, and `pages` that will be used render the final website build.

### [Static components](#static-components)

At the core of Delgada is a distinct separation between components that are static (i.e. send HTML/CSS to the client) and components that are dynamic (i.e. send HTML/CSS/JavaScript to the client).

This section will focus on static components –– dynamic components/islands will be dicussed later on.

To quickly break it down:

- Static components are authored in `.js` files
- Static components are functions that return a string of HTML
- Static component props are function arguments
- Static component styles are variables that contain a string of CSS

```js
import { html, css } from 'delgada';

export function Greeting({ name }) {
  return html`<h1>Hello ${name}!</h1>`;
}

export const styles = css`
  h1 {
    color: red;
  }
`;
```

#### [Template syntax](#template-syntax)

Delgada uses [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) as its templating syntax. An `html` and `css` tag functions are available and can be used to write expressive markup and styling like so:

```js
// Basic markup and styles
html`<h1>Hello world!</h1>`;
css`
  h1 {
    color: red;
  }
`;
```

```js
// Use JavaScript expressions directly in markup/styles
const name = 'Universe';
const color = 'purple';
html`<h1>Hello ${name}!</h1>`;
css`
  h1 {
    color: ${color};
  }
`;
```

```js
// Conditional rendering/styles
const age = 24;
let darkMode = true;
html`<p>You ${age >= 16 ? 'can' : 'cannot'} drive.</p>`;
css`
  body {
    background: ${darkMode ? 'black' : 'white'};
  }
`;
```

```js
// Mapping over data to generate markup/styles
const fruits = ['apple', 'banana', 'orange'];
const tokens = [
  { name: 'primary-color', value: 'rgb(210, 210, 210)' },
  { name: 'secondary-color', value: 'rgb(180, 180, 180)' },
];
html`
  <ul>
    ${fruits.map((fruit) => html`<li>${fruit}</li>`)}
  </ul>
`;
css`
  :root {
    ${tokens.map((token) => css`--${token.name}: ${token.value};`)}
  }
`;
```

The `html` and `css` function accepts an array of strings that are separated by an arbitrary set of value arguments (which represent JavaScript expressions that may exist in a template). It builds up these different parts into an array of strings that are then joined and returned as the final rendered HTML.

It also notably has some special logic for handling expressions that map over arrays of data to generate markup/styles –– something that is not cleanly handled in regular JavaScript template literals.

<details>
  <summary>A note on tagged template developer experience</summary>
  <p>By default, tagged templates will be rendered/treated as strings in code editors which results in a less than ideal developer experience when writing component markup/styles. This, however, can be changed with extensions/tooling.</p>
  <p>In the case of VS Code, installing the <a href="https://marketplace.visualstudio.com/items?itemName=bierner.lit-html">lit-html</a> and <a href="https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html">es6-string-html</a> extensions make a world of difference while writing HTML/CSS in tagged templates. They can be used to add a ton of helpful features like syntax highlighting, IntelliSense, quick hover info, HTML tag folding, and so on.</p>
  <p><a href="https://emmet.io/">Emmet</a> support inside tagged templates can also be enabled in VS Code by changing the "Emmet: Include Languages" setting and adding mappings for <code>"javascript": "html"</code> and <code>"typescript": "html"</code>.</p>
</details>

#### [Using static components](#using-static-components)

To use a static component simply import and add the component function within the markup of another static component.

To correctly pick up the styles of a component, they also must be imported and added to the styles of the target component as shown in the below code snippet.

```js
import { html, css } from 'delgada';
import { Greeting, styles as GreetingStyles } from 'Greeting.js';

export function Hero() {
  return html`
    ${Greeting({ name: 'Reader' })}
    <p>This is the home page.</p>
  `;
}

export const styles = css`
  p {
    color: blue;
  }

  ${GreetingStyles}
`;
```

### [Pages](#pages)

#### [Metadata object](#metadata-object)

**Optional inline styles**

Some may have noticed that all the page styles in the code snippets above were eventually inlined.

```html
<head>
  <style>
    ${styles}
  </style>
</head>
```

While this is great for improving first-time page loads, it's not so great for web pages that have a lot of recurring visitors who would benefit from an external CSS file that can be cached by the browser.

For about [20 lines of code](https://github.com/delgada-ui/delgada/blob/main/src/core/styles.ts#L3-L24), the option to define styles as inline or as an external file is possible.

In Delgada, this manifests as the ability to define a `metadata` object for each page with various configuration options. One of them is the ability to change whether the styles of a given page should be inlined or not.

```js
export const metadata = {
  // Will generate a separate CSS file for the given page
  inlineCSS: false,
};

// ... other static component code ...
```

### [Page layouts](#page-templates)

Another feature that is basically free because static components are just functions is the ability to define page layouts.

Template components can be defined using the same syntax as a static component and accepts a `slot` prop. In the example below, a template can be used to reduce the boilerplate of web pages.

```js
import { html } from 'delgada';

export function Template(slot) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>My Website</title>
      </head>
      <body>
        ${slot}
      </body>
    </html>
  `;
}
```

```js
import { html } from 'delgada';

export function Index() {
  return html`<h1>Hello World!</h1>`;
}
```

To use the template, the `routes` array in `server.js` simply needs to be updated so that page components are wrapped by the template component.

```js
import { Index } from './src/pages/Index.js';
import { Template } from './src/templates/Template.js';

const routes = [
  {
    path: '/',
    component: () => {
      Template(Index);
    },
  },
];
```

Delgada takes this one step further by also automatically [passing the `metadata` object to all templates](https://github.com/delgada-ui/delgada/blob/main/src/core/buildPage.ts#L48) so that it can be used to pass arbitrary data from a page into a template.

```js
export const metadata = {
  title: 'My Website',
  inlineCSS: false,
};
```

```js
import { html } from 'delgada';

export function Template(slot, metadata) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${metadata.title}</title>
      </head>
      <body>
        ${slot}
      </body>
    </html>
  `;
}
```

### [Routing](#routing)

### [Static file serving](#static-file-serving)

Similar to Next.js, all files in the `public` directory are served to the client at the root URL (`/`).

If, for example, there's a CSS file called `global.css`, it will be served at `/global.css` and can be referenced in website markup like so:

```html
<link rel="stylesheet" href="/global.css" />
```

This applies to all files and file types that are placed in the `public` directory.

### [Dynamic components](#dynamic-components)
