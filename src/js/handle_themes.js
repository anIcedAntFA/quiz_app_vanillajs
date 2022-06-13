let darkTheme = localStorage.getItem('dark-theme');

function enableDarkTheme() {
  document.body.classList.add('dark-theme');
  // Add icon light theme to the i tag
  darkThemeToggle.classList.toggle('fa-sun');
  // Add text 'light' to a span tag
  darkThemeLabel.textContent = 'Light';
  // Change color of label tag to 'yellow'
  if (darkThemeLabel.classList.toggle('tag-yellow')) {
    darkThemeLabel.classList.add('tag-yellow');
    darkThemeLabel.classList.remove('tag-purple');
  }
  localStorage.setItem('dark-theme', 'enabled');
}

function disableDarkTheme() {
  document.body.classList.remove('dark-theme');
  // Add icon dark theme to the i tag
  darkThemeToggle.classList.toggle('fa-sun');
  // Add text 'dark' to a span tag
  darkThemeLabel.textContent = 'Dark';
  // Change color of label tag to 'purple'
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

    // if it not current enabled, enable it
    if (darkTheme !== 'enabled') {
      enableDarkTheme();
      // if it has been enabled, turn it off
    } else {
      disableDarkTheme();
    }
  });
}

export default handleDarkTheme;
