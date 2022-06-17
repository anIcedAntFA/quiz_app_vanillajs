import handleDarkTheme from './handle_themes.js';
import handleEvents from './handle_events.js';
import { validateForm } from './validate_form.js';

function init() {
  handleDarkTheme();
  handleEvents();
  validateForm();
}

init();
