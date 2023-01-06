function solution(progresses, speeds) {
  const result = [];
  let day = 0;

  while (progresses.length) {
    progresses = progresses.map((progress, index) => progress + speeds[index]);

    for (const progress of [...progresses]) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        day++;
      } else {
        break;
      }
    }

    if (day > 0) {
      result.push(day);
      day = 0;
    }
  }

  return result;
}