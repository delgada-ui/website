import { html, css } from 'delgada';

export function PostTitle({ title, date }) {
  return html`
    <section id="title-container">
      <h1>${title}</h1>
      <p>${date} – Written by Hawk Ticehurst</p>
    </section>
  `;
}

export const styles = css`
  #title-container {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2rem;
  }

  #title-container h1 {
    margin-top: 0;
  }
`;
