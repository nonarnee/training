function solution(answers) {
  let a = 0;
  let b = 0;
  let c = 0;
  let result = [];

  for (let i=0; i<answers.length; i++) {
    if (i % 5 + 1 === answers[i]) { a++; }
    if ((i%2 === 0 ? 2 : [1, 3, 4, 5][(Math.floor(i/2))%4]) === answers[i]) { b++; }
    if ([3, 1, 2, 4, 5][Math.floor(i%10/2)] === answers[i]) { c++; }
  }

  [a, b, c].forEach((answer, idx) => answer === Math.max(...[a, b, c]) && result.push(idx+1));
  return result;
}