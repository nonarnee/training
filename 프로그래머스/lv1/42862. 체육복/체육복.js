function solution(n, lost, reserve) {
  const lostStudent = lost.filter((lostNum) => !reserve.includes(lostNum)).sort();
  let rental = reserve.filter((reserveNum) => !lost.includes(reserveNum));
  let result = n - lostStudent.length;

  for (const lostNum of lostStudent) {
    if (rental.includes(lostNum - 1)) {
      rental[rental.findIndex((studentNum) => studentNum === lostNum-1)] = -1;
      result++;
      continue;
    }

    if (rental.includes(lostNum + 1)) {
      rental[rental.findIndex((studentNum) => studentNum === lostNum+1)] = -1;
      result++;
    }
  }

  return result;
}