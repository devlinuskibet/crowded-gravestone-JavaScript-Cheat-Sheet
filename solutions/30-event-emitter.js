// Exercise 30: Simple EventEmitter
// Implement class EventEmitter with methods on(event, listener), emit(event, ...args), and off(event, listener).
// Example: const ee = new EventEmitter(); ee.on("m", v => ...); ee.emit("m", 1);
// Hint: Store listeners in an object where key is event name and value is an array of functions.
// Run:  node run.js 30

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].slice().forEach(listener => listener(...args));
  }
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }
}
