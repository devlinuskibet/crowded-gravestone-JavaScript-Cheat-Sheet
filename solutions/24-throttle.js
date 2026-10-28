// Exercise 24: Throttle a function
// Write throttle(fn, interval) that returns a function that executes immediately upon the first call, but ignores further calls until interval ms have passed.
// Example: const t = throttle(fn, 50); t(); t(); // only first call runs within 50ms
// Hint: Store Date.now() of the last call in a closure variable. If now - lastTime >= interval, execute fn and update lastTime.
// Run:  node run.js 24

function throttle(fn, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      return fn.apply(this, args);
    }
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Throttle a function",
  fn: throttle,
  tests: [
    {
      call: (throttle) => {
        let count = 0;
        const f = throttle(() => count++, 50);
        f(); f(); f();
        return count;
      },
      expected: 1
    },
    {
      call: async (throttle) => {
        let count = 0;
        const f = throttle(() => count++, 25);
        f();
        await new Promise(r => setTimeout(r, 40));
        f();
        return count;
      },
      expected: 2
    }
  ],
};

