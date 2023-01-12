function solution(numbers) {
  function compare(a, b) {
    const ab = Number(String(a) + String(b));
    const ba = Number(String(b) + String(a));
    return ba - ab + 1;
  }

  const result = [...numbers].sort(compare).join('');

  return result.startsWith('0') ? '0' : result;
}