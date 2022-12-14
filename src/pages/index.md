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
- Zero config with common sense defaults

## [Getting started](#getting-started)

Try getting started with the [Delgada template](https://github.com/delgada-ui/template). Install the template with the following command and then follow the directions in the project readme.

<pre>
  <code>$ <span class="select-all">npx degit delgada-ui/template my-delgada-project</span></code>
</pre>

<section class="warning-banner">
  <p class="bold">Warning: Here be dragons</p>
  <p>Delgada is not production ready software (and may never be). If you're looking for a great tool to build content-focused websites check out <a href="https://astro.build/">Astro</a>.</p>
</section>

## [Concepts](#concepts)

- [Project structure](#project-structure)
- [Static components](#static-components)
- [Pages](#pages)
- [Page templates](#page-templates)
- [Routing](#routing)
- [Dynamic components](#dynamic-components)
- [Markdown](#markdown)

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
│   │   │   └── WebComponent.js
│   │   └── StaticComponent.js
│   └── pages/
│       ├── blog/
│       │   ├── _template.js
│       │   ├── post-1.md
│       │   └── post-2.md
│       ├── _template.js
│       └── index.js
├── package.json
└── web-dev-server.config.mjs
```

The root of the project is where various project config files live such as `package.json` and notably `web-dev-server.config.mjs`. Delgada uses [Web Dev Server](https://modern-web.dev/docs/dev-server/overview/) as its development server and the config file contains a plugin for serving Delgada websites.

A `public` directory contains all the static assets. Similar to Next.js, all files in this directory are served to the client (unchanged/unaltered) at the root URL (`/`).

If, for example, there's a file called `global.css`, it will be served at `/global.css` and can be referenced in website markup like so:

```html
<link rel="stylesheet" href="/global.css" />
```

Finally, a `src` directory will typically contain a `components` directory and a `pages` directory.

The `components` directory is where components will live. If you're website has no components at all this directory is optional.

The `pages` directory is where website pages will live. This directory is required and supports `.js` or `.md` files.

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

Delgada uses [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) as its templating syntax. An `html` and `css` tag function are available and can be used to write expressive markup and styling like so:

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

_More details coming soon._

### [Page templates](#page-templates)

_More details coming soon._

### [Routing](#routing)

_More details coming soon._

### [Dynamic components](#dynamic-components)

_More details coming soon._

### [Markdown](#markdown)

Delgada comes with markdown support built in. _More details coming soon._
