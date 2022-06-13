import { updateState, addHide, removeHide } from './common_function.js';
import { startCountdown } from './handle_timer.js';
import { updateLocalStoragePlayers } from './local_storage.js';
import { setNextQuestion } from './render_questions_answers.js';
import renderResult from './render_result.js';

function renderAppInformation() {}

function handleAppLanguage() {
  alert('This feature is under construction');
}

function handleContinueButton() {
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    addHide(element),
  );
  [appRuleElement, startBtnElement, exitBtnElement].forEach((element) => removeHide(element));
  appControlsElement.style.flexDirection = 'row';
  renderInfoList();
}

function handleNextButton() {
  currentQuestionIndex++;
  setNextQuestion();
}

function handleBackButton() {
  [appLeaderboardElement, backBtnElement].forEach((element) => addHide(element));
  renderResult();
}

function renderGameSettings() {
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    addHide(element),
  );
  [exitBtnElement, submitBtnElement, appSettingElement].forEach((element) => removeHide(element));
  appControlsElement.style.margin = '0';
}

function renderInfoList() {
  return (ruleListElement.innerHTML = `
    <p>1. You will have only <span>${TIME_MINUTE} minute ${TIME_SECOND} seconds</span> to complete this quiz.</p>
    <p>2. Once you select your answer, it cannot be undone.</p>
    <p>3. You can go to the next question only after answering the previous question first.</p>
    <p>4. You will get <span>${POINT_PLUS} points</span> on the basis of your correct answers.</p>
    <p>5. You will lose <span>${POINT_MINUS} points</span> on the basis of your wrong answers.</p>
    <p>6. You cannot exit from the Quiz while you are playing.</p>
    <p>7. If you do not finish <span>all</span> questions, you will not get a position on the Leaderboard.</p>
  `);
}

function startGame() {
  [exitBtnElement, startBtnElement, appRuleElement].forEach((element) => addHide(element));
  removeHide(questionWrapperElement);

  updateState();
  setNextQuestion();

  startCountdown();
}

function saveGamePlayer() {
  const playerName = localStorage.getItem('newest-player-name');
  isSavedPlayer = true;
  timeTotalPlayer = minPlayer * 60 + secPlayer;

  removeHide(highScoresBtnElement);

  updateLocalStoragePlayers(
    playerName,
    score,
    minPlayer,
    secPlayer,
    timeTotalPlayer,
    percentAccuracy,
    (isApproved = true),
  );
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
  removeHide(questionWrapperElement);

  updateState();
  setNextQuestion();

  timer = 90;
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
}

export {
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
};
