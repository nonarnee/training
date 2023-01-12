function solution(citations) {
  const hIndex = [];
  for (let i=1; i<=Math.max(...citations); i++) {
    const sieve = new Array(citations.length).fill(-10);

    citations.forEach((quot, idx) => {
      if (quot < i) {
        sieve[idx] = quot;
      }

      if (quot === i) {
        sieve[idx] = -1;
      }
    });

    if (
      sieve
        .filter((mark) => mark < 0)
        .length >= i
      && sieve
        .filter((quot) => quot > i)
        .length === 0
    ) {
      hIndex.push(i);
    }
  }
    
  return hIndex.length ? Math.max(...hIndex) : 0;
}