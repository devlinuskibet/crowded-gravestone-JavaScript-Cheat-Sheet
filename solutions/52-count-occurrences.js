// Exercise 52: Count occurrences of value
// Write countOccurrences(arr, val) that counts how many times val appears in array arr.
// Example: countOccurrences([1, 2, 3, 2, 2, 4], 2) -> 3
// Hint: Use arr.reduce((count, x) => x === val ? count + 1 : count, 0).
// Run:  node run.js 52

function countOccurrences(arr, val) {
  return arr.reduce((count, x) => (x === val ? count + 1 : count), 0);
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Count occurrences of value",
  fn: countOccurrences,
  tests: [
    { args: [[1, 2, 3, 2, 2, 4], 2], expected: 3 },
    { args: [['a', 'b', 'c'], 'z'], expected: 0 },
    { args: [[true, false, true, true], true], expected: 3 },
    { args: [[], 1], expected: 0 }
  ],
};

