import questionsList from './data.js';
import { validateInput, setValid } from './validate.js';
import { startCountdown, updateTimer, saveTimePlayer } from './timer.js';
import {
  setLocalStoragePlayers,
  getLocalStoragePlayers,
  updateLocalStoragePlayers,
} from './local_storage.js';

const addHide = (element) => element.classList.add('hide');
const removeHide = (element) => element.classList.remove('hide');

function setQuestionState() {
  questionStateElement.innerHTML = `
    Question ${currentQuestionIndex + 1} of ${questionsList.length}
  `;
}

function renderInfoList() {
  return (infoListElement.innerHTML = `
    <p>1. You will have only <span>${TIME_MINUTE} minute ${TIME_SECOND} seconds</span> to complete this quiz.</p>
    <p>2. Once you select your answer, it cannot be undone.</p>
    <p>3. You can go to the next question only after answering the previous question first.</p>
    <p>4. You will get <span>${POINT_PLUS} points</span> on the basis of your correct answers.</p>
    <p>5. You will lose <span>${POINT_MINUS} points</span> on the basis of your wrong answers.</p>
    <p>6. You cannot exit from the Quiz while you are playing.</p>
  `);
}

function updateState() {
  shuffledQuestions = questionsList.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  score = 0;
  minPlayer = 0;
  secPlayer = 0;
}

function handleContinueClick() {
  const playerName = inputElement.value;
  localStorage.setItem('newest-player-name', playerName);
  setLocalStoragePlayers(playerName);

  [appHomeElement, highScoresBtnElement, continueBtnElement].forEach((element) => addHide(element));
  [appInfoElement, startBtnElement, exitBtnElement].forEach((element) => removeHide(element));
  appControlsElement.style.flexDirection = 'row';
}

function startGame() {
  updateState();
  [exitBtnElement, startBtnElement, appInfoElement].forEach((element) => addHide(element));
  removeHide(questionWrapperElement);
  setNextQuestion();
  startCountdown();
}

function setNextQuestion() {
  const questionObject = shuffledQuestions[currentQuestionIndex];
  resetState();
  setQuestionState();
  renderQuestion(questionObject);
}

function restartGame() {
  appControlsElement.classList.remove('gap-12');
  updateState();
  [
    appResultElement,
    appLeaderboardElement,
    exitBtnElement,
    restartBtnElement,
    highScoresBtnElement,
  ].forEach((element) => addHide(element));
  removeHide(questionWrapperElement);
  setNextQuestion();
  timer = 90;
  startCountdown();
}

function renderLeaderboard() {
  [
    appHomeElement,
    appResultElement,
    continueBtnElement,
    restartBtnElement,
    highScoresBtnElement,
    exitBtnElement,
  ].forEach((element) => addHide(element));
  [appLeaderboardElement, exitBtnElement, restartBtnElement].forEach((element) =>
    removeHide(element),
  );
  appControlsElement.classList.add('gap-12');
  appControlsElement.style.flexDirection = 'row';

  const players = getLocalStoragePlayers();
  players.sort((number1, number2) => number2.player_score - number1.player_score);
  console.log(players);

  const b = players.map((player) => {
    return player.player_score;
  });
  console.log(b);

  const findDuplicateNumber = (array) =>
    array.filter((item, index) => array.indexOf(item) !== index);
  console.log(findDuplicateNumber(b));

  const a = players.map((player) => {
    return player.player_time_min * 60 + player.player_time_sec;
  });
  console.log(a);
  console.log(a.sort());

  const string = players.map((player, index) => {
    let count = 1;

    return `
      <tr>
        <td>${count + index}</td>
        <td>${player.player_name}</td>
        <td>${player.player_score}</td>
        <td>${player.player_time_min}:${player.player_time_sec}</td>
      </tr>
    `;
  });

  leaderboardTableElement.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Nickname</th>
          <th>Score</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        ${string.join('')}
      </tbody>
    </table>
  `;
}

let checkLocalStoragePlayers = getLocalStoragePlayers();

if (checkLocalStoragePlayers.length === 0) {
  console.log('No players');
} else if (checkLocalStoragePlayers === 1) {
  console.log('has only 1 player');
} else {
  console.log('continue');
}

function exitGame() {
  appControlsElement.classList.remove('gap-12');
  appControlsElement.style.flexDirection = 'row-reverse';
  [
    appResultElement,
    appInfoElement,
    appLeaderboardElement,
    startBtnElement,
    exitBtnElement,
    restartBtnElement,
  ].forEach((element) => addHide(element));
  [appHomeElement, highScoresBtnElement, continueBtnElement].forEach((element) =>
    removeHide(element),
  );
}

function resetState() {
  clearStatusClass(document.body);
  addHide(nextBtnElement);

  while (questionAnswerElement.firstChild) {
    questionAnswerElement.removeChild(questionAnswerElement.firstChild);
  }
}

function renderQuestion(questionObject) {
  questionTitleElement.innerHTML = `
    <hr />
      ${questionObject.question}
    <hr />
  `;

  questionObject.answers.forEach((answer) => {
    const answerBtnElement = document.createElement('button');
    answerBtnElement.innerText = answer.text;
    answerBtnElement.classList.add('btn', 'btn-outline');

    if (answer.correct) {
      answerBtnElement.dataset.correct = answer.correct;
    }

    questionAnswerElement.appendChild(answerBtnElement);
    answerBtnElement.addEventListener('click', selectAnswer);
  });
}

function selectAnswer(event) {
  const selectedAnswer = event.target;
  const correctDataAttribute = selectedAnswer.dataset.correct;
  handleCorrectAnswer(correctDataAttribute);
  handleQuestionsList(correctDataAttribute);
}

function handleCorrectAnswer(correct) {
  if (correct === 'true') {
    correctAnswer++;
    score += POINT_PLUS;
  } else {
    wrongAnswer++;
    score -= POINT_MINUS;
  }
  setStatusClass(document.body, correct);
  Array.from(questionAnswerElement.children).forEach((answer) => {
    setStatusClass(answer, answer.dataset.correct);
    answer.disabled = true;
    answer.style.cursor = 'auto';
  });
}

function handleQuestionsList() {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    removeHide(nextBtnElement);
    appControlsElement.style.margin = '0';
  } else {
    saveTimePlayer();
    console.log(minPlayer, secPlayer);
    updateTimer();
    renderResult();
  }
}

function renderResult(correct) {
  clearStatusClass(document.body, correct);
  [questionWrapperElement, nextBtnElement].forEach((element) => addHide(element));
  [appResultElement, exitBtnElement, restartBtnElement, highScoresBtnElement].forEach((element) =>
    removeHide(element),
  );
  appControlsElement.style.margin = '4rem 0 6rem 0';

  const playerName = localStorage.getItem('newest-player-name');
  updateLocalStoragePlayers(playerName, score, minPlayer, secPlayer);

  resultDescriptionElement.innerHTML = `
    Congratulations ✨<span>${playerName}</span>✨,
    <br />
    you have completed the Quiz 🚀💖
  `;
  resultTableElement.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Correct Answers</th>
          <th>Wrong Answers</th>
          <th>Total Scores</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${correctAnswer}</td>
          <td>${wrongAnswer}</td>
          <td>${score}</td>
          <td>${minPlayer}:${secPlayer}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) return element.classList.add('correct');
  return element.classList.add('wrong');
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function handleEvents() {
  inputElement.addEventListener('focusout', validateInput);
  inputElement.addEventListener('input', setValid);

  continueBtnElement.addEventListener('click', () => {
    if (validateInput()) handleContinueClick();
  });
  startBtnElement.addEventListener('click', startGame);
  nextBtnElement.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  restartBtnElement.addEventListener('click', restartGame);
  highScoresBtnElement.addEventListener('click', () => {
    renderLeaderboard();
  });
  exitBtnElement.addEventListener('click', exitGame);
}

export { renderResult, renderInfoList, handleEvents };
