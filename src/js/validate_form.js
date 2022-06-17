import Validator from './lib/validator.js';
import {
  showSuccessToastName,
  showSuccessToastSettings,
  showSuccessToastRules,
} from './handle_toasts.js';
import { renderWarningHome, renderWarningRules } from './handle_modals.js';
import { getLocalStoragePlayers } from './local_storage.js';

function validateHome() {
  Validator({
    form: '[data-form-home]',
    formGroupSelector: '[data-form-group]',
    errorSelector: '[data-form-message]',
    rules: [
      isRequired('[data-form-control-nickname]', 'Please type in your nickname.'),
      minLength('[data-form-control-nickname]', 3),
      maxLength('[data-form-control-nickname]', 12),
    ],
    onSubmit: function (dataHome) {
      const isDuplicateName = getLocalStoragePlayers().some(
        (player) => player.player_name === dataHome.nickname,
      );
      console.log(isDuplicateName);
      playerName = dataHome.nickname;
      if (isDuplicateName) {
        renderWarningHome();
      } else {
        isSavedPlayerName = true;
        showSuccessToastName();
        console.log(playerName);
      }
    },
  });
}

function validateSettings() {
  Validator({
    form: '[data-form-settings]',
    formGroupSelector: '[data-form-group]',
    errorSelector: '[data-form-message]',
    rules: [
      isRequired(
        '[data-form-control-amount]',
        'Please type in number of questions you wanna play.',
      ),
      isNumber('[data-form-control-amount]'),
      withinRange(
        '[data-form-control-amount]',
        5,
        20,
        `The number of questions is only between 5 and 20`,
      ),
      isRequired(
        '[data-form-control-difficulty]',
        'Please choose questions difficulty you wanna play.',
      ),
      isRequired('[data-form-control-type]', 'Please choose type of questions you wanna play.'),
      isRequired(
        '[data-form-control-category]',
        'Please select topic of questions you wanna play.',
      ),
    ],
    onSubmit: function (dataSettings) {
      console.log(dataSettings);
      isSavedPlayerSettings = true;
      showSuccessToastSettings();
      questionAmount = dataSettings.amount;
      questionDifficulty = dataSettings.difficulty;
      questionType = dataSettings.type;
      questionCategory = dataSettings.category;
      console.log(questionAmount);
      console.log(questionDifficulty);
      console.log(questionType);
      console.log(questionCategory);
    },
  });
}

function validateRules() {
  Validator({
    form: '[data-form-rules]',
    formGroupSelector: '[data-form-group]',
    errorSelector: '[data-form-message]',
    rules: [isRequired('[data-form-control-rules]', 'Please select your choice.')],
    onSubmit: function (dataRules) {
      isSavedPlayerRules = true;
      if (dataRules.decision === 'agree') {
        isRuleAccepted = true;
        showSuccessToastRules();
      } else {
        isRuleAccepted = false;
        renderWarningRules();
      }
    },
  });
}

function validateForm() {
  validateHome();
  validateSettings();
  validateRules();
}

//*----Define Rules-----*//
// principles:
// 1. Failure => return error message
// 2. Success => return undefined

//* Get value from inputElement, insert to function under
function isRequired(selector, message) {
  return {
    selector,
    check: function (value) {
      return value ? undefined : message || 'Please fill out this field.';
    },
  };
}

function minLength(selector, minLength, message) {
  return {
    selector,
    check: function (value) {
      return value.length >= minLength
        ? undefined
        : message || `Please enter at least ${minLength} characters.`;
    },
  };
}

function maxLength(selector, maxLength, message) {
  return {
    selector,
    check: function (value) {
      return value.length <= maxLength
        ? undefined
        : message || `Please enter maximum ${maxLength} characters.`;
    },
  };
}

function isNumber(selector, message) {
  return {
    selector,
    check: function (value) {
      const NUMBERS = /^[0-9]+$/;
      return value.match(NUMBERS) ? undefined : message || 'This field must contain only numbers.';
    },
  };
}

function withinRange(selector, minRange, maxRange, message) {
  return {
    selector,
    check: function (value) {
      const number = parseInt(value);
      return !isNaN(number) && number >= minRange && number <= maxRange
        ? undefined
        : message || `This field only contain number between ${minRange} and ${maxRange}`;
    },
  };
}

export { validateHome, validateForm };
