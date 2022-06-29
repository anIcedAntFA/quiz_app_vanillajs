import { getSettingsValue } from './common_function.js';
import renderResult from './render_result.js';
//************************************************************************

function setTimer() {
  timer = getSettingsValue().questionAmount * TIME_PER_QUESTION;
  timeMinutes = Math.floor(timer / 60);
  timeSeconds = timer % 60;
}

function renderTimer() {
  minutes = Math.floor(timer / 60);
  seconds = timer % 60;
  questionTimerElement.innerHTML = `Time left: ${minutes}:${seconds}`;
}

function startCountdown() {
  timerId = setInterval(() => {
    if (timer > 0) {
      timer--;
      renderTimer();
    } else {
      saveTimePlayer();
      updateTimer();
      renderResult();
    }
  }, 1000);
}

function updateTimer() {
  timer = getSettingsValue().questionAmount * TIME_PER_QUESTION;
  clearInterval(timerId);
  renderTimer();
}

function saveTimePlayer() {
  setTimer();

  playerTimeMin = timeMinutes - minutes;
  playerTimeSec = timeSeconds - seconds;

  if (playerTimeSec > 0) {
    playerTimeMin = timeMinutes - minutes;
    playerTimeSec = timeSeconds - seconds;
  } else {
    playerTimeMin = playerTimeMin - 1;
    playerTimeSec = playerTimeSec + 60;
  }
}

export { setTimer, renderTimer, startCountdown, updateTimer, saveTimePlayer };
