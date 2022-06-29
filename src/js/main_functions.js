import {
  resetSettingsState,
  updateState,
  addHide,
  removeHide,
  getSettingsValue,
} from './common_function.js';
import renderGameSettings from './render_settings.js';
import renderInfoList from './render_rules.js';
import { renderTimer, startCountdown } from './handle_timer.js';
import { setNextQuestion } from './render_questions_answers.js';
import { updateLocalStoragePlayers } from './local_storage.js';
import renderResult from './render_result.js';
import renderLeaderboard from './render_leaderboard.js';
import { handleLoadedQuestions } from './api/handle_API.js';
import handleApiQuestions from './api/handle_API.js';

import {
  showErrorToastName,
  showErrorToastRules,
  showSuccessToastSavedResult,
} from './handle_toasts.js';
import {
  renderAppInformation,
  renderErrorAppLanguage,
  renderWarningSettings,
} from './handle_modals.js';
//************************************************************************************************************

async function handleContinueButton() {
  if (isSavedPlayerName && isSavedPlayerSettings) {
    [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach(
      (element) => addHide(element),
    );
    [appRuleElement, startBtnElement, exitBtnElement].forEach((element) => removeHide(element));
    appControlsElement.style.flexDirection = 'row';

    renderInfoList();
    renderTimer();

    const loadedQuestions = await handleApiQuestions();
    handleLoadedQuestions(loadedQuestions);
    shuffledQuestions = questionsOutput.sort(() => Math.random() - 0.5);
  } else if (!isSavedPlayerName) {
    showErrorToastName();
  } else if (!isSavedPlayerSettings) {
    renderWarningSettings();
  }

  clearTimeout(warningDuplicateNameTimerId);
  clearTimeout(warningDefaultSettingsTimerId);
}

function startGame() {
  if (isRuleAccepted) {
    [exitBtnElement, startBtnElement, appRuleElement].forEach((element) => addHide(element));
    removeHide(appQuestionElement);

    updateState();
    setNextQuestion();
    startCountdown();
    resetSettingsState();
  } else if (!isRuleAccepted || isSavedPlayerRules) {
    showErrorToastRules();
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  setNextQuestion();
}

function saveGamePlayer() {
  const playerName = localStorage.getItem('newest-player-name');
  saveNumber++;
  isSavedPlayerResult = true;
  playerTimeTotal = playerTimeMin * 60 + playerTimeSec;

  if (saveNumber <= ONE_TIME) {
    highScoresBtnElementTimerId = setTimeout(() => {
      removeHide(highScoresBtnElement);
    }, 1000);
    updateLocalStoragePlayers(
      playerName,
      playerScore,
      playerTimeMin,
      playerTimeSec,
      playerTimeTotal,
      percentAccuracy,
      (isApproved = true),
    );
    showSuccessToastSavedResult();
  }
}

function handleBackButton() {
  [appLeaderboardElement, backBtnElement].forEach((element) => addHide(element));
  renderResult();
}

function restartGame() {
  [
    appResultElement,
    appLeaderboardElement,
    exitBtnElement,
    restartBtnElement,
    saveBtnElement,
    highScoresBtnElement,
  ].forEach((element) => addHide(element));
  removeHide(appQuestionElement);

  clearTimeout(highScoresBtnElementTimerId);

  updateState();
  setNextQuestion();

  timer = getSettingsValue().questionAmount * TIME_PER_QUESTION;
  startCountdown();
}

function exitGame() {
  playerLeft = true;
  appControlsElement.style.margin = '4rem 0';
  appControlsElement.style.flexDirection = 'row-reverse';
  [
    appSettingElement,
    appRuleElement,
    appResultElement,
    appLeaderboardElement,
    submitBtnElement,
    startBtnElement,
    saveBtnElement,
    restartBtnElement,
    backBtnElement,
    exitBtnElement,
  ].forEach((element) => addHide(element));
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    removeHide(element),
  );

  clearTimeout(highScoresBtnElementTimerId);
}

function handleMainEvents() {
  appInformationToggle.addEventListener('click', renderAppInformation);
  appLanguageToggle.addEventListener('click', renderErrorAppLanguage);

  settingBtnElement.addEventListener('click', renderGameSettings);
  continueBtnElement.addEventListener('click', handleContinueButton);
  startBtnElement.addEventListener('click', startGame);
  nextBtnElement.addEventListener('click', handleNextButton);
  saveBtnElement.addEventListener('click', saveGamePlayer);
  highScoresBtnElement.addEventListener('click', renderLeaderboard);
  backBtnElement.addEventListener('click', handleBackButton);
  restartBtnElement.addEventListener('click', restartGame);
  exitBtnElement.addEventListener('click', exitGame);
}

export default handleMainEvents;
