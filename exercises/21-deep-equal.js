// Exercise 21: Deep equality check
// Write deepEqual(a, b) that returns true if two values are strictly equal primitives or structurally equal objects/arrays, and false otherwise.
// Example: deepEqual({ x: [1, 2] }, { x: [1, 2] }) -> true
// Hint: Check strict equality first. Then check if both are non-null objects and compare their keys recursively.
// Run:  node run.js 21

function deepEqual(a, b) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Deep equality check",
  fn: deepEqual,
  tests: [
    { args: [1, 1], expected: true },
    { args: [{ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }], expected: true },
    { args: [{ a: 1 }, { a: 2 }], expected: false },
    { args: [[1, 2, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2], [1, 2, 3]], expected: false }
  ],
};

