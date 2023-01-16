function solution(word) {
  const words = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let result = 0;

  const dfs = (input) => {
    // 재귀 종료 조건
    if(input === word) {
      result = count;
      return;
    }

    // 이전 재귀로 돌아가는 조건
    if(input.length >= 5) {
      return;
    }

    for(let i = 0; i < words.length; i++) {
      count += 1;
      dfs(input + words[i]);
    }
  }

  dfs('');

  return result;
}