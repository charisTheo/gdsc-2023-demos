const nav = document.querySelector('nav');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', openMenu);
nav.addEventListener('blur', closeMenu);
menuCloseButton.addEventListener('click', closeMenu);

function openMenu() {
  nav.classList.add('open');
  nav.focus();
}
function closeMenu() {
  // Allow the menu to close after the link click event has finished bubbling
  setTimeout(() => {
    nav.classList.remove('open');
  }, 100);
}

const themeToggleButton = document.querySelector('#theme-toggle-button');
const initialThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
updateTheme(initialThemePreference);

themeToggleButton.addEventListener('click', () => {
  updateTheme(!document.body.classList.contains('dark'));
});
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches }) => {
    updateTheme(matches);
});

function updateTheme(darkMode) {
  if (darkMode) {
    document.body.classList.add('dark');
    themeToggleButton.title = 'Turn on light mode';
  } else {
    document.body.classList.remove('dark');
    themeToggleButton.title = 'Turn on dark mode';
  }
}

document.querySelector('#skip-to-content-html-code').textContent = `  <a id="skip-to-content-link" href='#main'>Skip to content</a>`

document.querySelector('#dark-theme-html-code').textContent = `  <button
    id='theme-toggle-button'
    aria-label="auto"
    aria-live="polite"
  >
    <div class='dark-theme-icon' aria-hidden='true'></div>
    <div class='light-theme-icon' aria-hidden='true'></div>
  </button>
`
