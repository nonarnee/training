function solution(clothes) {
  let result = 1;
  let obj = {};

  for (const [_, type] of clothes) {
    if (obj[type]) {
      obj[type]++;
      continue;
    }
    obj[type] = 2;
  }

  for (const type of Object.keys(obj)) {
    result *= obj[type];
  }

  return result - 1;
}