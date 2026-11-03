// Exercise 107: N-th Fibonacci number
// Write fib(n) that returns the n-th Fibonacci number (where fib(0) = 0, fib(1) = 1, fib(2) = 1, etc.) in O(n) time.
// Example: fib(6) -> 8
// Hint: Use iteration with two variables [a, b] = [b, a + b] for n steps.
// Run:  node run.js 107

function fib(n) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "N-th Fibonacci number",
  fn: fib,
  tests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [6], expected: 8 },
    { args: [10], expected: 55 }
  ],
};

