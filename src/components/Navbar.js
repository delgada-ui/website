import { html, css } from 'delgada';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/writing',
    name: 'Writing',
  },
];

export function Navbar() {
  return html`
    <nav>
      ${routes.map(
        (route) => html` <a href="${route.path}">${route.name}</a> `
      )}
    </nav>
  `;
}

export const styles = css`
  nav {
    position: fixed;
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    padding: 8px 16px;
    background-color: var(--nav-background);
    border-radius: var(--corner-radius);
    white-space: nowrap;
  }

  nav a {
    padding: 2px 12px;
    text-decoration: none;
    color: var(--text-secondary);
  }

  nav a:hover,
  nav a:focus {
    text-decoration: underline;
    color: var(--text-primary);
    outline: none;
  }
`;
