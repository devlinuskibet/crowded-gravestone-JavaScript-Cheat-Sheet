// Exercise 23: Debounce a function
// Write debounce(fn, delay) that returns a debounced wrapper. Rapid consecutive calls reset the countdown; fn only executes after delay ms of inactivity.
// Example: const d = debounce(log, 100); d(); d(); // only logs once after 100ms
// Hint: Keep a timer variable in closure; clearTimeout(timer) on every invocation and set a new setTimeout.
// Run:  node run.js 23

function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Debounce a function",
  fn: debounce,
  tests: [
    {
      call: async (debounce) => {
        let count = 0;
        const f = debounce(() => count++, 30);
        f(); f(); f();
        await new Promise(r => setTimeout(r, 60));
        return count;
      },
      expected: 1
    },
    {
      call: async (debounce) => {
        let lastVal = 0;
        const f = debounce(v => { lastVal = v; }, 20);
        f(1); f(2); f(3);
        await new Promise(r => setTimeout(r, 50));
        return lastVal;
      },
      expected: 3
    }
  ],
};

