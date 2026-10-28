// Exercise 30: Simple EventEmitter
// Implement class EventEmitter with methods on(event, listener), emit(event, ...args), and off(event, listener).
// Example: const ee = new EventEmitter(); ee.on("m", v => ...); ee.emit("m", 1);
// Hint: Store listeners in an object where key is event name and value is an array of functions.
// Run:  node run.js 30

class EventEmitter {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Simple EventEmitter",
  fn: EventEmitter,
  tests: [
    {
      call: (EventEmitter) => {
        const ee = new EventEmitter();
        let res = '';
        ee.on('greet', name => { res = 'Hello, ' + name; });
        ee.emit('greet', 'Alice');
        return res;
      },
      expected: 'Hello, Alice'
    },
    {
      call: (EventEmitter) => {
        const ee = new EventEmitter();
        let count = 0;
        const fn = () => count++;
        ee.on('hit', fn);
        ee.emit('hit');
        ee.off('hit', fn);
        ee.emit('hit');
        return count;
      },
      expected: 1
    }
  ],
};

