// Exercise 92: Async sleep / delay
// Write delay(ms, value) that returns a Promise resolving with value after ms milliseconds.
// Example: await delay(20, "ok") -> "ok"
// Hint: Return new Promise(resolve => setTimeout(() => resolve(value), ms)).
// Run:  node run.js 92

function delay(ms, value) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Async sleep / delay",
  fn: delay,
  tests: [
    {
      call: async (delay) => {
        const start = Date.now();
        const val = await delay(25, 'hello');
        return { val, passed: Date.now() - start >= 20 };
      },
      expected: { val: 'hello', passed: true }
    }
  ],
};

