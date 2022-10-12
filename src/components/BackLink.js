import { html, css } from 'delgada';
import {
  ArrowLeftIcon,
  styles as ArrowLeftIconStyles,
} from './icons/ArrowLeftIcon.js';

export function BackLink({ link }) {
  return html` <a id="back-link" href="${link}"> ${ArrowLeftIcon()} back </a> `;
}

export const styles = css`
  #back-link {
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    color: var(--text-secondary);
    width: min-content;
  }

  #back-link > svg {
    margin-right: 0.5rem;
  }

  #back-link:hover,
  #back-link:focus {
    text-decoration: underline;
  }

  ${ArrowLeftIconStyles}
`;
