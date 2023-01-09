function solution(priorities, location) {
  let order = 1;
  const queue = priorities.map((priority, idx) => ({ location: idx, priority }));

  while (queue.length) {
    if (queue[0].priority < Math.max(...queue.map(({ priority }) => priority))) {
      queue.push(queue.shift());
      continue;
    }

    if (queue.shift().location === location) {
      return order;
    }

    order++;
  }
}