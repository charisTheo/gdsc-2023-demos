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

const showDialogButtons = document.querySelectorAll('button[id$="-dialog-button"]');
showDialogButtons.forEach((showDialogButton) => {
  showDialogButton.addEventListener('click', () => {
    const dialog = document.querySelector(showDialogButton.dataset.dialog);
    dialog.showModal();
  });
});

const focusTrapDialog = document.querySelector('#focus-trap-dialog');
focusTrapDialog.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    const firstFocusableElement = focusTrapDialog.querySelector('.icon-button');
    const lastFocusableElement = focusTrapDialog.querySelector('form[method="dialog"]:last-of-type button');

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      event.preventDefault();
    }
  }
});

document.querySelector('#dialog-html-code').textContent = `  <button data-dialog="#basic-dialog" id="show-dialog-button">Show dialog</button>

  <dialog id="basic-dialog">
    <form method="dialog">
      <button class="icon-button" aria-label="auto" aria-live="polite">
        <span hidden>Close dialog</span>
        <svg aria-hidden="true" height="48" width="48" src="/path/to/icon.svg"></svg>
      </button>
    </form>

    <p>This is a basic dialog</p>

    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>`

document.querySelector('#responsive-navigation-html-code').textContent = `  <header>
    <button title="Open menu" id="menu-open-button">
      <div class="menu-open-icon"></div>
    </button>

    <nav tabindex="-1">
      <button title="Close menu" id="menu-close-button">
        <div class="menu-close-icon"></div>
      </button>

      <ul>
        <li><a href="/path">Link name</a></li>
        <li><a href="/path">Link name</a></li>
      </ul>
    </nav>

    <div class="backdrop"></div>
  </header>
`


document.querySelector('#skip-to-content-html-code').textContent = `  <a id="skip-to-content-link" href="#main">Skip to content</a>`

document.querySelector('#dark-theme-html-code').textContent = `  <button
    id="theme-toggle-button"
    title="Title added dynamically from JavaScript"
    aria-label="auto"
    aria-live="polite"
  >
    <div class="dark-theme-icon" aria-hidden="true"></div>
    <div class="light-theme-icon" aria-hidden="true"></div>
  </button>
`
document.querySelector('#icon-button-html-code').textContent = `  <button
    class="icon-button"
    title="Button description"
    aria-label="auto"
    aria-live="polite"
  >
    <svg
      class="button-icon"
      aria-hidden="true"
      height="48"
      width="48"
      src="/path/to/icon.svg"
    ></svg>
  </button>
`

document.querySelector('#disclosure-widget-html-code').textContent = `  <details>
    <summary>Basic example</summary>
    <p>More details here</p>
  </details>
`