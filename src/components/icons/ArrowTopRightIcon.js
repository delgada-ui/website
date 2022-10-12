import { html, css } from 'delgada';

export function ArrowTopRightIcon() {
  return html`
    <svg
      class="arrow-top-right-icon"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M162.662 145.691H366.309V349.338M352.166 159.833L145.691 366.309"
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
  .arrow-top-right-icon {
    width: 20px;
    height: 20px;
  }
`;
