function solution(participant, completion) {
  let result = {};
  
  for (const player of participant) {
    result[player] = result[player] ? result[player]+1 : 1;
  }

  for (const player of completion) {
    result[player] -= 1;
  }

  for (const player of Object.keys(result)) {
    if (result[player] > 0) {
      return player;
    }
  }
}