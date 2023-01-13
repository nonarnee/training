function solution(brown, yellow) {
  for (let i=3; i<=(brown+yellow)/i; i++) {
    let brownLeft = brown;
    let yellowLeft = yellow;

    brownLeft -= (brown+yellow)/i*2; // 윗줄, 아랫줄
    brownLeft -= (i-2)*2; // 위 아래 사이줄
    yellowLeft -= (i-2)*((brown+yellow)/i - 2); // 위 아래 사이줄 각 줄 왼쪽 오른쪽 2개 제외

    if (brownLeft === 0 && yellowLeft === 0) {
      return [(brown + yellow)/i, i];
    }
  }
}