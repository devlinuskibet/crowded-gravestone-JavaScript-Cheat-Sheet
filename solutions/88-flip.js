// Exercise 88: Flip function arguments
// Write flip(fn) that returns a function that invokes fn with its first two arguments reversed.
// Example: const divide = (a, b) => a / b; flip(divide)(2, 10) -> 5
// Hint: Return function(a, b, ...rest) { return fn.call(this, b, a, ...rest); }.
// Run:  node run.js 88

function flip(fn) {
  return function(a, b, ...rest) {
    return fn.call(this, b, a, ...rest);
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Flip function arguments",
  fn: flip,
  tests: [
    { call: (flip) => flip((a, b) => a / b)(2, 10), expected: 5 },
    { call: (flip) => flip((a, b, c) => a + b + c)('A', 'B', 'C'), expected: 'BAC' }
  ],
};

