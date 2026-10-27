// Exercise 20: Chunk an array
// Write chunk(array, size) that splits an array into sub-arrays of maximum length size. The last chunk contains any remaining elements.
// Example: chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
// Hint: Use a loop with i += size and array.slice(i, i + size).
// Run:  node run.js 20

function chunk(array, size) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Chunk an array",
  fn: chunk,
  tests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
    { args: [[1, 2, 3, 4], 2], expected: [[1, 2], [3, 4]] },
    { args: [[1, 2], 5], expected: [[1, 2]] },
    { args: [[], 3], expected: [] }
  ],
};

