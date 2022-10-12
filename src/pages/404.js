import { html, css } from 'delgada';

export const metadata = {
  useTemplate: false,
};

export function page() {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Page could not be found 😮</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta charset="UTF-8" />

        <!-- Page assets -->
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&Inter:wght@200&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
        <link rel="stylesheet" href="/writing-post.css" />
      </head>
      <body>
        <main>
          <h1>404</h1>
          <p>Sorry! The page you are looking for does not exist.</p>
          <a href="/">Back to home</a>
        </main>
      </body>
    </html>
  `;
}

export const styles = css`
  body {
    font-weight: 400;
  }
`;
