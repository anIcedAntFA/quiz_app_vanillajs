import { addHide, removeHide, clearStatusClass } from './global.js';
import { updateLocalStoragePlayers } from './local_storage.js';

function renderResult(correct) {
  clearStatusClass(document.body, correct);
  [questionWrapperElement, nextBtnElement].forEach((element) => addHide(element));
  [appResultElement, exitBtnElement, restartBtnElement, highScoresBtnElement].forEach((element) =>
    removeHide(element),
  );
  appControlsElement.style.margin = '4rem 0 6rem 0';

  const playerName = localStorage.getItem('newest-player-name');
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
  }

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

export default renderResult;
