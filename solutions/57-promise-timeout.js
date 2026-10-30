// Exercise 57: Promise with timeout
// Write withTimeout(promise, ms, fallbackValue) that resolves with promise result if it settles within ms, or resolves with fallbackValue if it times out.
// Example: withTimeout(fetchData(), 50, "timed-out")
// Hint: Use setTimeout inside a new Promise, and clear the timer if promise resolves first.
// Run:  node run.js 57

function withTimeout(promise, ms, fallbackValue) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(fallbackValue), ms);
    Promise.resolve(promise).then(
      val => { clearTimeout(timer); resolve(val); },
      err => { clearTimeout(timer); reject(err); }
    );
  });
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Promise with timeout",
  fn: withTimeout,
  tests: [
    {
      call: async (withTimeout) => {
        const slow = new Promise(r => setTimeout(() => r('done'), 60));
        return await withTimeout(slow, 20, 'fallback');
      },
      expected: 'fallback'
    },
    {
      call: async (withTimeout) => {
        const fast = new Promise(r => setTimeout(() => r('quick'), 10));
        return await withTimeout(fast, 60, 'fallback');
      },
      expected: 'quick'
    }
  ],
};

