import { addHide, removeHide, sortByName } from './common_function.js';
import { getLocalStoragePlayers } from './local_storage.js';

function renderLeaderboard() {
  const currentLocalStoragePlayersLength = getLocalStoragePlayers().length;
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

  [appLeaderboardElement, exitBtnElement].forEach((element) => removeHide(element));
  if (playerLeft === false) {
    removeHide(backBtnElement);
  }

  appControlsElement.style.flexDirection = 'row';
  appControlsElement.style.margin = '4rem 0';

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
  const stringHtml = players.map((player, index) => {
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
        ${stringHtml.join('')}
      </tbody>
    </table>
  `;

  if (currentLocalStoragePlayersLength === 1) {
    leaderboardDescriptionElement.innerHTML = `
    Well done 🔥<span>${players[0].player_name}</span>🔥 😍‼️ 
    You are the <span>first</span> 🤪 to get a position on the ⭐<span style="font-family: 'fira-code-bold', sans-serif; text-transform: capitalize; color: var(--orange)">Leaderboard</span>⭐ 🚀🚀🚀.
    Please invite your friends to play together ☺️.
  `;
  } else if (currentLocalStoragePlayersLength > 1) {
    leaderboardDescriptionElement.innerHTML = `
      Well done guys 😍‼️ Especially 🔥<span>${players[0].player_name}</span>🔥,
      <br />
      you have reached a <span>top 1</span> ranking 🎉🎉🎉.
    `;
  } else {
    leaderboardDescriptionElement.innerHTML = `
      Oh well 👻‼️ No one is currently on the Leaderboard 😅,
      <br />
      I bet you are smart 🐧, follow the instructions to conquer this game and 
      be the first to put your name on the ⭐<span style="font-family: 'fira-code-bold', sans-serif; text-transform: capitalize; color: var(--orange)">Leaderboard</span>⭐ 🚀🚀🚀.
    `;
  }
}

export default renderLeaderboard;
