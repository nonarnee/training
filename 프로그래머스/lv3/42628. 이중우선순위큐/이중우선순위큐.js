class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  clear() {
    this.heap = [];
  }
    
  heapifyUp(compareFn) {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (compareFn(this.heap[parentIndex], lastInsertedNode)) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  }

  heapifyDown(compareFn) {
    if (!compareFn) {
      return;
    }

    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count
        && compareFn(this.heap[rightChildIndex], this.heap[leftChildIndex])
          ? rightChildIndex
          : leftChildIndex;

      if (compareFn(this.heap[smallerChildIndex], rootNode)) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  }

  top() {
    if (!this.heap.length) {
      return 0;
    }

    return this.heap[0];
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  upCompare = (a, b) => a > b;
  downCompare = (a, b) => a < b;

  heapifyDown() {
    super.heapifyDown(this.downCompare);
  }

  heapifyUp() {
    super.heapifyUp(this.upCompare);
  }

  insert(value) {
    this.heap.push(Number(value));
    this.heapifyUp();
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) {
      return undefined;
    } else if (count === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }
}

class MaxHeap extends Heap {
  constructor() {
    super();
  }

  upCompare = (a, b) => a < b;
  downCompare = (a, b) => a > b;

  heapifyDown() {
    super.heapifyDown(this.downCompare);
  }

  heapifyUp() {
    super.heapifyUp(this.upCompare);
  }

  insert(value) {
    this.heap.push(Number(value));
    this.heapifyUp();
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) {
      return undefined;
    } else if (count === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }
}

function solution(operations) {
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();
  let count = 0;

  for (const opt of operations) {
    if (opt.split(' ')[0] === 'I') {
      minHeap.insert(opt.split(' ')[1]);
      maxHeap.insert(opt.split(' ')[1]);
      count++;
    }

    if (opt.split(' ')[0] === 'D') {
      if (opt.split(' ')[1] === '1' && maxHeap.top()) {
        maxHeap.remove();
        count--;
      }

      if (opt.split(' ')[1] === '-1' && minHeap.top()) {
        minHeap.remove();
        count--;
      }
    }
      
    if (!count) {
      minHeap.clear();
      maxHeap.clear();
    }
  }

  return [maxHeap.top(), minHeap.top()];
}