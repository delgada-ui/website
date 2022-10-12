import { html, css } from 'delgada';

export function ArrowLeftIcon() {
  return html`
    <svg
      class="arrow-left-icon"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M244 400L100 256L244 112M120 256L412 256"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-width="48"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

export const styles = css`
  .arrow-left-icon {
    width: 20px;
    height: 20px;
  }
`;