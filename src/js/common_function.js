import { setLocalStoragePlayers } from './local_storage.js';

function resetSettingsState() {
  isSavedPlayerName = false;
  isSavedPlayerSettings = false;
  isSavedPlayerRules = false;
  isRuleAccepted = false;
}

function updateState() {
  shuffledQuestions = questionsOutput.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  percentAccuracy = 0;
  score = 0;
  minPlayer = 0;
  secPlayer = 0;
  timeTotalPlayer = 0;
  isApproved = false;
  isSavedPlayerResult = false;
  playerLeft = false;
  saveNumber = 0;

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

const intersectionArray = (array1, array2) => array1.filter((item) => array2.includes(item));

const uniqueArray = (array) => [...new Set(array)];

const uniqueArray2 = (array) =>
  array.filter((item, index, arrayReference) => arrayReference.indexOf(item) === index);

Array.prototype.contains = function (v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function () {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

export {
  resetSettingsState,
  updateState,
  addHide,
  removeHide,
  setStatusClass,
  clearStatusClass,
  resetState,
  sortByName,
};
