let darkTheme = localStorage.getItem('dark-theme');

function enableDarkTheme() {
  document.body.classList.add('dark-theme');
  darkThemeToggle.classList.toggle('fa-sun');
  darkThemeLabel.textContent = 'Light';

  if (darkThemeLabel.classList.toggle('tag-yellow')) {
    darkThemeLabel.classList.add('tag-yellow');
    darkThemeLabel.classList.remove('tag-purple');
  }
  localStorage.setItem('dark-theme', 'enabled');
}

function disableDarkTheme() {
  document.body.classList.remove('dark-theme');
  darkThemeToggle.classList.toggle('fa-sun');
  darkThemeLabel.textContent = 'Dark';

  if (darkThemeLabel.classList.toggle('tag-purple')) {
    darkThemeLabel.classList.add('tag-yellow');
    darkThemeLabel.classList.remove('tag-yellow');
  }
  localStorage.setItem('dark-theme', null);
}

function handleDarkTheme() {
  // If the user already visited and enabled darkTheme
  // start things off with it on
  if (darkTheme === 'enabled') {
    enableDarkTheme();
  }
  // When someone clicks the button
  darkThemeToggle.addEventListener('click', () => {
    // get their darkTheme setting
    darkTheme = localStorage.getItem('dark-theme');

    if (darkTheme !== 'enabled') {
      enableDarkTheme();
    } else {
      disableDarkTheme();
    }
  });
}

export default handleDarkTheme;
