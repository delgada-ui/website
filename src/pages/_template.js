import { html } from 'delgada';

export function template(slot) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>
          Delgada – An HTML-first web framework for building slim UIs
        </title>
        <meta name="title" content="Delgada" />
        <meta
          name="description"
          content="Delgada is a small HTML-first web framework for building slim multipage websites using modern web standards and conventions."
        />

        <!-- Open graph meta tags -->
        <meta property="og:title" content="Delgada" />
        <meta
          property="og:description"
          content="Delgada is a small HTML-first web framework for building slim multipage websites using modern web standards and conventions."
        />
        <meta property="og:url" content="https://delgada.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://delgada.dev/seo.png" />

        <!-- Twitter meta tags -->
        <meta property="twitter:title" content="Delgada" />
        <meta
          property="twitter:description"
          content="Delgada is a small HTML-first web framework for building slim multipage websites using modern web standards and conventions."
        />
        <meta property="twitter:url" content="https://delgada.dev/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://delgada.dev/seo.png"
        />

        <!-- Page assets -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&Inter:wght@200&family=Lora:wght@400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
      </head>
      <body>
        <main>${slot}</main>
      </body>
    </html>
  `;
}
