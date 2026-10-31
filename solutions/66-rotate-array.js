// Exercise 66: Rotate an array
// Write rotateArray(arr, k) that rotates an array to the right by k steps. Return a new array without mutating the original.
// Example: rotateArray([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]
// Hint: Compute n = arr.length; normalize k = k % n; return arr.slice(-k).concat(arr.slice(0, -k)).
// Run:  node run.js 66

function rotateArray(arr, k) {
  if (arr.length === 0) return [];
  const shift = k % arr.length;
  if (shift === 0) return arr.slice();
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Rotate an array",
  fn: rotateArray,
  tests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
    { args: [[1, 2, 3], 4], expected: [3, 1, 2] },
    { args: [[10, 20], 0], expected: [10, 20] },
    { args: [[], 3], expected: [] }
  ],
};

