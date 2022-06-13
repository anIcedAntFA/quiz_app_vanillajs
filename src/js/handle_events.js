import {
  isEmpty,
  validateNickname,
  validateQuestions,
  validateDifficulty,
  validateType,
  setValid,
} from './validate_form.js';
import {
  renderAppInformation,
  handleAppLanguage,
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

function handleEvents() {
  appInformationToggle.addEventListener('click', renderAppInformation);
  appLanguageToggle.addEventListener('click', handleAppLanguage);

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
  restartBtnElement.addEventListener('click', restartGame);
  saveBtnElement.addEventListener('click', saveGamePlayer);
  highScoresBtnElement.addEventListener('click', renderLeaderboard);
  backBtnElement.addEventListener('click', handleBackButton);
  exitBtnElement.addEventListener('click', exitGame);
}

export default handleEvents;
