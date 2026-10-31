// Exercise 67: Compact an array
// Write compact(arr) that creates a new array with all falsy values (false, null, 0, "", undefined, NaN) filtered out.
// Example: compact([0, 1, false, 2, "", 3, null, undefined, NaN]) -> [1, 2, 3]
// Hint: Use arr.filter(Boolean).
// Run:  node run.js 67

function compact(arr) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Compact an array",
  fn: compact,
  tests: [
    { args: [[0, 1, false, 2, "", 3, null, undefined, NaN]], expected: [1, 2, 3] },
    { args: [["hello", "world"]], expected: ["hello", "world"] },
    { args: [[false, 0, null]], expected: [] },
    { args: [[]], expected: [] }
  ],
};

