function solution(n, wires) {
  let result = -1;

  if (n === 2) {
    return 0;
  }
    
  function BFS(graph, startNode) {
    const visited = [];
    let queue = [startNode];

    while (queue.length) {
      const node = queue.shift();

      if (!visited.includes(node)) {
        const connectedNodes = graph
          .filter((wire) => wire.includes(node))
          .map((connected) => connected[0] === node ? connected[1] : connected[0]);
        visited.push(node);
        queue = [...queue, ...connectedNodes];
      }
    }
    return visited;
  }

  for (const erasedWire of wires) {
    const removedWires = wires.filter((wire) => wire !== erasedWire);

    const left = BFS(removedWires, erasedWire[0]);
    const right = BFS(removedWires, erasedWire[1]);

    if (n > left.length && n > right.length) {
      if (result === -1) {
        result = Math.abs(left.length - right.length);
        continue;
      }

      result = Math.abs(left.length - right.length) < result ? Math.abs(left.length - right.length) : result;
    }
  }

  return result;
}