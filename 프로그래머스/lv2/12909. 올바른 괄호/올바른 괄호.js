function solution(s){
  const stack = [...s];
  let counter = 0;

  if (stack[0] === ')' || stack[stack.length - 1] === '(') {
    return false;
  }

  for (const item of [...stack]) {
    if (counter < 0) {
      return false;
    }
      
    if (item === '(') {
      counter++;
    }

    if (item === ')') {
      counter--;
    }

    stack.pop();
  }

  return counter === 0;
}