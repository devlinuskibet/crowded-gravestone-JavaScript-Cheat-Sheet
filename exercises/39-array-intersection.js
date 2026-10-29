// Exercise 39: Array intersection
// Write intersection(arr1, arr2) that returns an array of unique values present in both arrays.
// Example: intersection([1, 2, 2, 1], [2, 2]) -> [2]
// Hint: Use a Set for arr2, then filter arr1 with deduplication using a result Set.
// Run:  node run.js 39

function intersection(arr1, arr2) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Array intersection",
  fn: intersection,
  tests: [
    { args: [[1, 2, 2, 1], [2, 2]], expected: [2] },
    { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [] }
  ],
};

