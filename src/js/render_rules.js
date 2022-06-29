import { setTimer } from './handle_timer.js';
//************************************************************************************************************

function renderInfoList() {
  setTimer();

  if (timeMinutes > 0) {
    ruleListElement.innerHTML = `
      <p>1. You will have only <span>${timeMinutes} minute ${timeSeconds} seconds</span> to complete this quiz.</p>
    `;
  } else {
    ruleListElement.innerHTML = `
      <p>1. You will have only <span>${timeSeconds} seconds</span> to complete this quiz.</p>
    `;
  }

  return (ruleListElement.innerHTML += `
    <p>2. Once you select your answer, it cannot be undone.</p>
    <p>3. You can go to the next question only after answering the previous question first.</p>
    <p>4. You will get <span>${POINT_PLUS} points</span> on the basis of your correct answers.</p>
    <p>5. You will lose <span>${POINT_MINUS} points</span> on the basis of your wrong answers.</p>
    <p>6. You cannot exit from the Quiz while you are playing.</p>
    <p>7. If you do not finish <span>all</span> questions, you will not get a position on the Leaderboard.</p>
  `);
}

export default renderInfoList;
