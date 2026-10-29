// Exercise 44: Call function once
// Write once(fn) that restricts fn to run only on the first call. Subsequent calls return the result of that first execution.
// Example: const f = once(x => x * 2); f(3); f(10); // returns 6 both times
// Hint: Keep a boolean called flag and result cache in closure.
// Run:  node run.js 44

function once(fn) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Call function once",
  fn: once,
  tests: [
    {
      call: (once) => {
        let runs = 0;
        const f = once(x => { runs++; return x * 2; });
        const a = f(5);
        const b = f(100);
        return { a, b, runs };
      },
      expected: { a: 10, b: 10, runs: 1 }
    },
    {
      call: (once) => {
        const f = once((a, b) => a + b);
        return [f(1, 2), f(3, 4)];
      },
      expected: [3, 3]
    }
  ],
};

