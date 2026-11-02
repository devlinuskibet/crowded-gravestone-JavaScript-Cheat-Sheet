// Exercise 97: Queue data structure
// Implement class Queue with methods enqueue(val), dequeue() (returns front or null), peek() (returns front or null), isEmpty(), and size().
// Example: const q = new Queue(); q.enqueue(1); q.dequeue() -> 1
// Hint: Use an internal array: enqueue pushes to end; dequeue shifts from front.
// Run:  node run.js 97

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    return this.items.length === 0 ? null : this.items.shift();
  }
  peek() {
    return this.items.length === 0 ? null : this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
