import handleDarkTheme from './handle_themes.js';
import validateForm from './validate_form.js';
import handleMainEvents from './main_functions.js';
//*************************************************

function init() {
  handleDarkTheme();
  validateForm();
  handleMainEvents();
}

init();
