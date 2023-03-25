const menuOpenButton = document.querySelector('#menu-open-button');
menuOpenButton.addEventListener('click', () => {
  document.querySelector('nav').classList.add('open');
});

const menuCloseButton = document.querySelector('#menu-close-button');
menuCloseButton.addEventListener('click', () => {
  document.querySelector('nav').classList.remove('open');
});


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