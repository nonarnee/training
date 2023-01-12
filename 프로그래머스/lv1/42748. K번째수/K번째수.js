function solution(array, commands) {
  let result = [];

  for (const command of commands) {
    const key = [...array]
      .splice(command[0] - 1, command[1] - command[0] + 1)
      .sort((a, b) => a - b)[command[2] - 1];
    result.push(key);
  }

  return result;
}