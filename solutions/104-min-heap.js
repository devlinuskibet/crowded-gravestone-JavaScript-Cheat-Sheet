// Exercise 104: Min heap / priority queue
// Implement class MinHeap with insert(val), extractMin() (returns smallest or null), peek(), and size().
// Example: const h = new MinHeap(); h.insert(3); h.insert(1); h.extractMin() -> 1
// Hint: Use array representation where parent is floor((i-1)/2), left is 2i+1, right is 2i+2. Bubble up on insert, bubble down on extract.
// Run:  node run.js 104

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return min;
  }
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
