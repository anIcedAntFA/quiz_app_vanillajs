import questionsList from './data.js';
import { validateInput, setValid } from './validate.js';
import { startCountdown, updateTimer, saveTimePlayer } from './timer.js';
import {
  setLocalStoragePlayers,
  getLocalStoragePlayers,
  updateLocalStoragePlayers,
} from './local_storage.js';
import {
  playerName,
  updateState,
  addHide,
  removeHide,
  setStatusClass,
  clearStatusClass,
  resetState,
  sortByName,
} from './global.js';

function setQuestionState() {
  questionStateElement.innerHTML = `
    Question ${currentQuestionIndex + 1} of ${questionsList.length}
  `;
}

function showAppInformation() {}

function handleAppLanguage() {
  alert('This feature is under construction');
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

function renderGameSettings() {
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    addHide(element),
  );
  [exitBtnElement, submitBtnElement, appSettingElement].forEach((element) => removeHide(element));
  appControlsElement.style.margin = '0';
}

function handleContinueClick() {
  const playerName = inputElement.value;
  localStorage.setItem('newest-player-name', playerName);
  setLocalStoragePlayers(playerName);

  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    addHide(element),
  );
  [appRuleElement, startBtnElement, exitBtnElement].forEach((element) => removeHide(element));
  renderInfoList();

  appControlsElement.style.flexDirection = 'row';
}

function startGame() {
  [exitBtnElement, startBtnElement, appRuleElement].forEach((element) => addHide(element));
  removeHide(questionWrapperElement);

  updateState();
  setNextQuestion();
  startCountdown();
}

function setNextQuestion() {
  const questionObject = shuffledQuestions[currentQuestionIndex];
  resetState();
  setQuestionState();
  renderQuestion(questionObject);
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
    percentAccuracy =
      Math.round(((correctAnswer / shuffledQuestions.length) * 100 + Number.EPSILON) * 100) / 100;
    saveTimePlayer();
    updateTimer();
    renderResult();
  }
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
  timer = 5;
  startCountdown();
}

function saveGame() {
  timeTotalPlayer = minPlayer * 60 + secPlayer;

  if (correctAnswer + wrongAnswer === shuffledQuestions.length) {
    updateLocalStoragePlayers(
      playerName,
      score,
      minPlayer,
      secPlayer,
      timeTotalPlayer,
      percentAccuracy,
      (isApproved = true),
    );
  } else {
    updateLocalStoragePlayers(
      playerName,
      score,
      minPlayer,
      secPlayer,
      timeTotalPlayer,
      percentAccuracy,
      isApproved,
    );
  }
}

function renderResult(correct) {
  const playerName = localStorage.getItem('newest-player-name');

  [questionWrapperElement, nextBtnElement].forEach((element) => addHide(element));
  [appResultElement, exitBtnElement, restartBtnElement, highScoresBtnElement].forEach((element) =>
    removeHide(element),
  );
  appControlsElement.style.margin = '3rem 0 4rem 0';

  clearStatusClass(document.body, correct);

  if (correctAnswer + wrongAnswer < shuffledQuestions.length) {
    appResultElement.style.padding = '0 4rem';

    resultDescriptionElement.innerHTML = `
      Oh no!💔💔 You could not finish the Quiz😖, <span>${playerName}</span>
      <br />
      Press <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--state-neutral)">restart button</span> to play again and try to complete <span style="text-transform: uppercase">all questions</span>. 
      Then you are able to get a position on the ⭐Leaderboard⭐.
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

  if (correctAnswer + wrongAnswer === shuffledQuestions.length) {
    removeHide(saveBtnElement);
    appResultElement.style.padding = '0 2rem';

    resultDescriptionElement.innerHTML = `
      Congratulations ✨<span>${playerName}</span>✨‼️
      <br />
      You have completed the Quiz 🚀💖
      <br />
      Press <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--state-correct)">save button</span>   
      to storage your result, then press <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--orange)">scores button</span> to see your ranking on the ⭐Leaderboard⭐.
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
}

function renderLeaderboard() {
  [
    appHomeElement,
    appResultElement,
    settingBtnElement,
    continueBtnElement,
    restartBtnElement,
    saveBtnElement,
    highScoresBtnElement,
    exitBtnElement,
  ].forEach((element) => addHide(element));
  [appLeaderboardElement, exitBtnElement, restartBtnElement].forEach((element) =>
    removeHide(element),
  );

  appControlsElement.style.flexDirection = 'row';

  const players = getLocalStoragePlayers().filter((player) => player.is_approved === true);
  console.log(players);
  players.sort((element1, element2) => {
    return (
      //* case 1: different scores => sort by scores
      element2.player_score - element1.player_score ||
      //* case 2: equal scores => sort by scores & time
      (element2.player_score === element1.player_score &&
        element1.player_time_total - element2.player_time_total) ||
      //* case 3: equal scores & time => sort by scores, time & percent accuracy
      (element2.player_score === element1.player_score &&
        element1.player_time_total === element2.player_time_total &&
        element2.player_percent_accuracy - element1.player_percent_accuracy) ||
      //* case 4: equal scores, time & percent accuracy => sort by scores, time, percent accuracy & name
      (element2.player_score === element1.player_score &&
        element1.player_time_total === element2.player_time_total &&
        element2.player_percent_accuracy === element1.player_percent_accuracy &&
        sortByName(element1.player_name, element2.player_name))
    );
  });

  const findDuplicateNumber = (array) =>
    array.filter((item, index) => array.indexOf(item) !== index);

  count = 0;
  const string = players.map((player, index) => {
    count++;
    return `
      <tr>
        <td>${count}</td>
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

  leaderboardDescriptionElement.innerHTML = `
    Well done guys 😍‼️ Especially 🔥<span>${players[0].player_name}</span>🔥,
    <br />
    you have reached a <span>top 1</span> ranking 🚀🚀🚀.
  `;
}

function exitGame() {
  appControlsElement.classList.remove('gap-12');
  appControlsElement.style.flexDirection = 'row-reverse';
  [
    appSettingElement,
    appRuleElement,
    appResultElement,
    appLeaderboardElement,
    submitBtnElement,
    startBtnElement,
    exitBtnElement,
    restartBtnElement,
    saveBtnElement,
  ].forEach((element) => addHide(element));
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    removeHide(element),
  );
}

function handleEvents() {
  appInformationToggle.addEventListener('click', showAppInformation);
  appLanguageToggle.addEventListener('click', handleAppLanguage);

  inputElement.addEventListener('focusout', validateInput);
  inputElement.addEventListener('input', setValid);

  settingBtnElement.addEventListener('click', renderGameSettings);
  continueBtnElement.addEventListener('click', () => {
    if (validateInput()) handleContinueClick();
  });
  startBtnElement.addEventListener('click', startGame);
  nextBtnElement.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  restartBtnElement.addEventListener('click', restartGame);
  saveBtnElement.addEventListener('click', saveGame);
  highScoresBtnElement.addEventListener('click', renderLeaderboard);
  exitBtnElement.addEventListener('click', exitGame);
}

export { renderResult, handleEvents };
