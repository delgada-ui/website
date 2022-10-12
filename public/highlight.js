import 'https://unpkg.com/prismjs@1.28.0/prism.js';
const codes = document.querySelectorAll('code[class*="language-"]');
for (const code of codes) {
  Prism.highlightAllUnder(code);
}
