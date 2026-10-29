// Exercise 48: Zip arrays
// Write zip(arr1, arr2) that groups corresponding elements from each array into pairs. Stop at the shorter array length.
// Example: zip(["a", "b", "c"], [1, 2]) -> [["a", 1], ["b", 2]]
// Hint: Find len = Math.min(arr1.length, arr2.length) and loop up to len.
// Run:  node run.js 48

function zip(arr1, arr2) {
  const len = Math.min(arr1.length, arr2.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Zip arrays",
  fn: zip,
  tests: [
    { args: [['a', 'b', 'c'], [1, 2]], expected: [['a', 1], ['b', 2]] },
    { args: [[1, 2], ['x', 'y']], expected: [[1, 'x'], [2, 'y']] },
    { args: [[], [1, 2]], expected: [] }
  ],
};

