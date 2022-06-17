import questionsList from './data.js';
import { setLocalStoragePlayers } from './local_storage.js';

function updateState() {
  shuffledQuestions = questionsList.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  percentAccuracy = 0;
  score = 0;
  minPlayer = 0;
  secPlayer = 0;
  timeTotalPlayer = 0;
  isApproved = false;
  isSavedPlayer = false;
  playerLeft = false;

  const newestPlayerName = playerName;
  localStorage.setItem('newest-player-name', newestPlayerName);
  setLocalStoragePlayers(newestPlayerName);
}

const addHide = (element) => element.classList.add('hide');
const removeHide = (element) => element.classList.remove('hide');

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) return element.classList.add('correct');
  return element.classList.add('wrong');
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function resetState() {
  clearStatusClass(document.body);
  addHide(nextBtnElement);

  while (questionAnswerElement.firstChild) {
    questionAnswerElement.removeChild(questionAnswerElement.firstChild);
  }
}

function sortByName(element1, element2) {
  const nameA = element1.toUpperCase();
  const nameB = element2.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export {
  updateState,
  addHide,
  removeHide,
  setStatusClass,
  clearStatusClass,
  resetState,
  sortByName,
};
