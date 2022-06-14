import {
  isEmpty,
  validateNickname,
  validateQuestions,
  validateDifficulty,
  validateType,
  setValid,
} from './validate_form.js';
import {
  handleContinueButton,
  handleNextButton,
  handleBackButton,
  renderGameSettings,
  startGame,
  saveGamePlayer,
  restartGame,
  exitGame,
} from './app.js';
import renderLeaderboard from './render_leaderboard.js';
import { renderAppInformation, handleAppLanguage, renderWarningSettings } from './handle_modals.js';

function handleEvents() {
  appInformationToggle.addEventListener('click', renderAppInformation);
  appLanguageToggle.addEventListener('click', renderWarningSettings);

  // inputNicknameElement.addEventListener('focusout', validateNickname);
  // inputQuestionsElement.addEventListener('focusout', validateQuestions);
  // inputDifficultyElement.addEventListener('focusout', validateDifficulty);
  // inputDifficultyElement.addEventListener('change', () => {
  //   if (isEmpty(inputDifficultyElement.value.trim())) validateDifficulty();
  // });
  // inputTypeElement.addEventListener('focusout', validateType);
  // inputTypeElement.addEventListener('change', () => {
  //   if (isEmpty(inputTypeElement.value.trim())) validateType();
  // });
  // inputNicknameElement.addEventListener('input', setValid);

  settingBtnElement.addEventListener('click', renderGameSettings);
  continueBtnElement.addEventListener('click', () => {
    if (validateNickname('error')) handleContinueButton();
  });
  startBtnElement.addEventListener('click', startGame);
  nextBtnElement.addEventListener('click', handleNextButton);
  saveBtnElement.addEventListener('click', saveGamePlayer);
  highScoresBtnElement.addEventListener('click', renderLeaderboard);
  backBtnElement.addEventListener('click', handleBackButton);
  restartBtnElement.addEventListener('click', restartGame);
  exitBtnElement.addEventListener('click', exitGame);
}

export default handleEvents;
