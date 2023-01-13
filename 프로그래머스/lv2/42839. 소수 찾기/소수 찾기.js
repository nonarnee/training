function solution(numbers) {
  function compare(a, b) {
    return Number(b + a) - Number(a + b);
  }

  const maxNum = Number([...numbers].sort(compare).join(''));
  let result = [];
  let sieve = Array(maxNum+1).fill(1);
  sieve[0] = 0;
  sieve[1] = 0;

  for (let i=2; i<=sieve.length; i++) {
    for (let j=2; i*j<=maxNum; j++) {
      sieve[i*j] = 0;
    }

    if (sieve[i]) {
      sieve[i] = i;
    }
  }

  const primes = sieve.filter((num) => num > 0);

  for (const prime of primes) {
    let pass = true;
    const numbersChar = numbers.split('');

    [...String(prime)].forEach((char) => {
      if (numbersChar.includes(char)) {
        for (let k=0; k<numbersChar.length; k++) {
          if (numbersChar[k] === char) {
            numbersChar[k] = 'x';
            break;
          }
        }
      } else {
        pass = false;
      }
    });

    if (pass) {
      result.push(prime);
    }
  }

  return result.length;
}