import handleApiQuestions from './handle_API.js';
import handleDarkTheme from './handle_themes.js';
import validateForm from './validate_form.js';
import handleEvents from './handle_events.js';

function init() {
  handleApiQuestions();
  handleDarkTheme();
  validateForm();
  handleEvents();
  console.log(!![]);
  const uniqueArray2 = (array) =>
    array.filter((item, index, arrayReference) => {
      console.log(arrayReference);
      return arrayReference.indexOf(item) === index;
    });

  console.log(uniqueArray2(['1', '2', '3', '4', '5', '1', '4', '3']));
}

init();
