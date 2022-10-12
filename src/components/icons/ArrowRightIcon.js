import { html, css } from 'delgada';

export function ArrowRightIcon() {
  return html`
    <svg
      class="arrow-right-icon"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M268 112L412 256L268 400M392 256H100"
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
  .arrow-right-icon {
    width: 20px;
    height: 20px;
  }
`;