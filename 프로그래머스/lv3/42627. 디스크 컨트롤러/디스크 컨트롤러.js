/*
 *  비선점 SJF 알고리즘
 */

function solution(jobs) {
  let second = 0;
  let result = 0;
  let queue = [...jobs].sort((a, b) => a[0] - b[0]);
  let heap = [];
  const bot = [];
  const getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  const getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  const getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  function heapifyUp() {
    const result = [...heap];
    let index = result.length - 1; // 계속해서 변하는 index 값
    const lastInsertedNode = result[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (
        result[parentIndex][1] > lastInsertedNode[1]
        || (result[parentIndex][1] === lastInsertedNode[1] && result[parentIndex][0] > lastInsertedNode[0])
      ) {
        result[index] = result[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    result[index] = lastInsertedNode;

    return result;
  }

  // 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
  function heapifyDown() {
    let index = 0;
    const result = [...heap];
    const count = result.length;
    const rootNode = result[index];

    // 계속해서 left child 가 있을 때 까지 검사한다.
    while (getLeftChildIndex(index) < count) {
      const leftChildIndex = getLeftChildIndex(index);
      const rightChildIndex = getRightChildIndex(index);

      // 왼쪽, 오른쪽 중에 더 작은 노드를 찾는다
      // rightChild 가 있다면 key의 값을 비교해서 더 작은 값을 찾는다.
      // 없다면 leftChild 가 더 작은 값을 가지는 인덱스가 된다.
      const smallerChildIndex =
        rightChildIndex < count
        && (
          result[rightChildIndex][1] < result[leftChildIndex][1]
          || (result[rightChildIndex][1] === result[leftChildIndex][1] && result[rightChildIndex][0] < result[leftChildIndex][0])
        )
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
      if (
        result[smallerChildIndex][1] < rootNode[1]
        || (result[smallerChildIndex][1] === rootNode[1] && result[smallerChildIndex][0] < rootNode[0])
      ) {
        result[index] = result[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    result[index] = rootNode;
    return result;
  }

  function remove() {
    const count = heap.length;
    const rootNode = heap[0];

    if (count <= 0) {
      return undefined;
    } else if (count === 1) {
      heap = [];
    } else {
      heap[0] = heap.pop();
      heap = heapifyDown(heap);
    }

    return rootNode;
  }

  while (queue.length || heap.length || bot.length) {
    if (queue.length && queue[0][0] === second) {
      heap.push(queue.shift());
      heap = heapifyUp(heap);
      continue;
    }

    second++;

    if (!bot.length) {
      if (!heap.length || heap[0][0] > second) {
        continue;
      }

      bot.push({
        job: heap[0],
        left: remove(heap)[1]
      });
    }

    if (bot.length) {
      bot[0].left -= 1;

      if (bot[0].left === 0) {
        result += second - bot[0].job[0];
        bot.pop();
      }
    }
  }


  return Math.floor(result / jobs.length);
}