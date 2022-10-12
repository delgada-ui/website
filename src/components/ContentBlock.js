import { html, css } from 'delgada';
import {
  ArrowRightIcon,
  styles as ArrowRightIconStyles,
} from './icons/ArrowRightIcon.js';
import {
  ArrowTopRightIcon,
  styles as ArrowTopRightIconStyles,
} from './icons/ArrowTopRightIcon.js';

export function ContentBlock({ title, link, summary, isExternalLink = true }) {
  return html`
    <section class="content-block">
      <a href="${link}">
        ${title} ${isExternalLink ? ArrowTopRightIcon() : ArrowRightIcon()}
      </a>
      <p>${summary}</p>
    </section>
  `;
}

export const styles = css`
  .content-block {
    margin-bottom: 2rem;
  }

  .content-block a {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .content-block svg {
    margin-left: 8px;
  }

  ${ArrowRightIconStyles}
  ${ArrowTopRightIconStyles}
`;
