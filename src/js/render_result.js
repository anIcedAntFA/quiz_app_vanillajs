import { addHide, removeHide, clearStatusClass } from './common_function.js';
import { updateLocalStoragePlayers } from './local_storage.js';

function renderResult(correct) {
  const playerName = localStorage.getItem('newest-player-name');

  [questionWrapperElement, nextBtnElement].forEach((element) => addHide(element));
  [appResultElement, exitBtnElement, restartBtnElement].forEach((element) => removeHide(element));
  if (isSavedPlayer) {
    removeHide(highScoresBtnElement);
  }
  appControlsElement.style.margin = '3rem 0 4rem 0';

  clearStatusClass(document.body, correct);

  timeTotalPlayer = minPlayer * 60 + secPlayer;
  updateLocalStoragePlayers(
    playerName,
    score,
    minPlayer,
    secPlayer,
    timeTotalPlayer,
    percentAccuracy,
    isApproved,
  );

  if (correctAnswer + wrongAnswer < shuffledQuestions.length) {
    removeHide(highScoresBtnElement);
    appResultElement.style.padding = '0 4rem';

    resultDescriptionElement.innerHTML = `
      Oh no!💔💔 You could not finish the Quiz😖, <span>${playerName}</span>
      <br />
      Press <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--state-neutral)">restart button</span> to play again and try to complete <span style="text-transform: uppercase">all questions</span>. 
      Then you are able to get a position on the ⭐Leaderboard⭐.
    `;
  }

  if (correctAnswer + wrongAnswer === shuffledQuestions.length && isSavedPlayer === false) {
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
  }

  if (correctAnswer + wrongAnswer === shuffledQuestions.length && isSavedPlayer === true) {
    appResultElement.style.padding = '0 2rem';

    resultDescriptionElement.innerHTML = `
      Welcome back ✨<span>${playerName}</span>✨‼️
      <br />
      Do you want to play again 🚀💖
      <br />
      Press <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--state-neutral)">restart button</span>   
      to try again.
    `;
  }

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

export default renderResult;
