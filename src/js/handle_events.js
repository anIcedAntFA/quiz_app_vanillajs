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
import { renderAppInformation, handleAppLanguage } from './handle_modals.js';

function handleEvents() {
  appInformationToggle.addEventListener('click', renderAppInformation);
  appLanguageToggle.addEventListener('click', handleAppLanguage);

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

export default handleEvents;
