import { html, css } from 'delgada';

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
        <meta property="twitter:image" content="https://delgada.dev/seo.png" />

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
        <header>
          <a href="https://github.com/delgada-ui/delgada">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Go to Delgada's GitHub repo</title>
              <path
                fill="white"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>
          </a>
        </header>
        <main>${slot}</main>
      </body>
    </html>
  `;
}

export const styles = css`
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.2rem;
    position: fixed;
    width: 100%;
    top: 0;
  }

  header a {
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 4px;
    line-height: 0;
    border-radius: 8px;
  }

  header a svg {
    width: 32px;
    height: 32px;
  }
`;
