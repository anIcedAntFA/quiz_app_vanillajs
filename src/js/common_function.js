import { setLocalStoragePlayers } from './local_storage.js';
//************************************************************

function resetSettingsState() {
  isSavedPlayerName = false;
  isSavedPlayerSettings = false;
  isSavedPlayerRules = false;
  isRuleAccepted = false;
}

function updateState() {
  currentQuestionIndex = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  percentAccuracy = 0;
  playerScore = 0;
  playerTimeMin = 0;
  playerTimeSec = 0;
  playerTimeTotal = 0;
  saveNumber = 0;
  isSavedPlayerResult = false;
  isApproved = false;
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

function getSettingsValue() {
  const questionAmountDefault = inputAmountElement.value;
  const questionDifficultyDefault = inputDifficultyElement.value;
  const questionTypeDefault = inputTypeElement.value;
  const questionCategoryDefault = Array.from(inputCategoryElements)
    .filter((input) => input.matches(':checked'))
    .map((input) => input.value);

  const questionSettingsValue = {
    questionAmount: questionAmount ?? questionAmountDefault,
    questionDifficulty: questionDifficulty ?? questionDifficultyDefault,
    questionType: questionType ?? questionTypeDefault,
    questionCategory: questionCategory ?? questionCategoryDefault,
  };
  return questionSettingsValue;
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
  getSettingsValue,
};
