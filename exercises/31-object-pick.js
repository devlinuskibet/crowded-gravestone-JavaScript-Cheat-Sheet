// Exercise 31: Pick object properties
// Write pick(obj, keys) that returns a new object containing only properties whose keys are in the keys array.
// Example: pick({ a: 1, b: 2, c: 3 }, ["a", "c"]) -> { a: 1, c: 3 }
// Hint: Loop through keys; if key in obj, assign result[key] = obj[key].
// Run:  node run.js 31

function pick(obj, keys) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Pick object properties",
  fn: pick,
  tests: [
    { args: [{ a: 1, b: 2, c: 3 }, ['a', 'c']], expected: { a: 1, c: 3 } },
    { args: [{ a: 1, b: 2 }, ['c', 'd']], expected: {} },
    { args: [{}, ['a']], expected: {} }
  ],
};

