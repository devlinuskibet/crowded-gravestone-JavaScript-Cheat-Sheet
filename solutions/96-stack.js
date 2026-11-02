// Exercise 96: Stack data structure
// Implement class Stack with methods push(val), pop() (returns popped or null), peek() (returns top or null), isEmpty(), and size().
// Example: const s = new Stack(); s.push(1); s.pop() -> 1
// Hint: Use an internal array: push with array.push, pop with array.pop (handling empty).
// Run:  node run.js 96

class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    return this.items.length === 0 ? null : this.items.pop();
  }
  peek() {
    return this.items.length === 0 ? null : this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
