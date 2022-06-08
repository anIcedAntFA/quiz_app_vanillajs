function setLocalStoragePlayers(key) {
  let players = getLocalStoragePlayers();

  if (players[0] === undefined) {
    players.push({
      player_name: key,
      player_score: 0,
      player_time_min: 0,
      player_time_sec: 0,
      player_time_total: 0,
      player_percent_accuracy: 0,
      is_approved: false,
    });
  } else {
    const existPlayer = players.find((playerName) => playerName.player_name === key);

    if (existPlayer) {
      players = players.map((player) =>
        player.player_name === key
          ? {
              player_name: key,
              player_score: 0,
              player_time_min: 0,
              player_time_sec: 0,
              player_time_total: 0,
              player_percent_accuracy: 0,
              is_approved: false,
            }
          : player,
      );
    } else {
      players.push({
        player_name: key,
        player_score: 0,
        player_time_min: 0,
        player_time_sec: 0,
        player_time_total: 0,
        player_percent_accuracy: 0,
        is_approved: false,
      });
    }
  }

  localStorage.setItem('players', JSON.stringify(players));
}

function getLocalStoragePlayers() {
  return JSON.parse(localStorage.getItem('players')) ?? [];
}

function updateLocalStoragePlayers(
  playerName,
  playerScore,
  playerTimeMin,
  playerTimeSec,
  playerTimeTotal,
  playerPercentAccuracy,
  isApproved,
) {
  let players = getLocalStoragePlayers();
  players = players.map((player) =>
    player.player_name === playerName
      ? {
          player_name: playerName,
          player_score: playerScore,
          player_time_min: playerTimeMin,
          player_time_sec: playerTimeSec,
          player_time_total: playerTimeTotal,
          player_percent_accuracy: playerPercentAccuracy,
          is_approved: isApproved,
        }
      : player,
  );

  localStorage.setItem('players', JSON.stringify(players));
}

export { setLocalStoragePlayers, getLocalStoragePlayers, updateLocalStoragePlayers };
