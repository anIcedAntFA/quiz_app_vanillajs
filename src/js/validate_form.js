import Validator from './library/validator.js';
import { isRequired, minLength, maxLength, isNumber, withinRange } from './library/validator.js';

import {
  showSuccessToastName,
  showSuccessToastSettings,
  showSuccessToastRules,
} from './handle_toasts.js';
import { renderWarningDuplicateName, renderWarningRules } from './handle_modals.js';
import { getLocalStoragePlayers } from './local_storage.js';
//************************************************************************************************************

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
    onSubmit(dataHome) {
      const isDuplicateName = getLocalStoragePlayers().some(
        (player) => player.player_name === dataHome.nickname,
      );
      playerName = dataHome.nickname;

      if (isDuplicateName) {
        renderWarningDuplicateName();
      } else {
        isSavedPlayerName = true;
        showSuccessToastName();
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
    onSubmit(dataSettings) {
      isSavedPlayerSettings = true;
      questionAmount = dataSettings.amount;
      questionDifficulty = dataSettings.difficulty;
      questionType = dataSettings.type;
      questionCategory = dataSettings.category;
      console.log(dataSettings);
      showSuccessToastSettings();
    },
  });
}

function validateRules() {
  Validator({
    form: '[data-form-rules]',
    formGroupSelector: '[data-form-group]',
    errorSelector: '[data-form-message]',
    rules: [isRequired('[data-form-control-rules]', 'Please select your choice.')],
    onSubmit(dataRules) {
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

export default validateForm;
