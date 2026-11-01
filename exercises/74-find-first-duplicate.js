// Exercise 74: Find first duplicate
// Write firstDuplicate(arr) that returns the first element whose second occurrence appears earliest in the array. Return null if no duplicates exist.
// Example: firstDuplicate([2, 1, 3, 5, 3, 2]) -> 3
// Hint: Use a Set to record seen items; return the first element already present in the Set.
// Run:  node run.js 74

function firstDuplicate(arr) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Find first duplicate",
  fn: firstDuplicate,
  tests: [
    { args: [[2, 1, 3, 5, 3, 2]], expected: 3 },
    { args: [[1, 2, 3, 4]], expected: null },
    { args: [[1, 1]], expected: 1 },
    { args: [[]], expected: null }
  ],
};

