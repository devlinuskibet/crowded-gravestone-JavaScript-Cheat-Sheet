// Exercise 106: Check power of two
// Write isPowerOfTwo(n) that determines if a given integer n is a power of two using bitwise operators in O(1) time.
// Example: isPowerOfTwo(16) -> true, isPowerOfTwo(18) -> false
// Hint: A positive number is power of two if and only if (n > 0) && ((n & (n - 1)) === 0).
// Run:  node run.js 106

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Check power of two",
  fn: isPowerOfTwo,
  tests: [
    { args: [1], expected: true },
    { args: [16], expected: true },
    { args: [18], expected: false },
    { args: [0], expected: false },
    { args: [-16], expected: false }
  ],
};

