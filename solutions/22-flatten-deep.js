// Exercise 22: Flatten deeply nested array
// Write flattenDeep(arr) that recursively flattens an array of arbitrary nesting depth into a 1D array. Do not use Array.prototype.flat.
// Example: flattenDeep([1, [2, [3, [4]], 5]]) -> [1, 2, 3, 4, 5]
// Hint: Iterate over elements: if Array.isArray(item) recursively call flattenDeep(item), else push item.
// Run:  node run.js 22

function flattenDeep(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Flatten deeply nested array",
  fn: flattenDeep,
  tests: [
    { args: [[1, [2, [3, [4]], 5]]], expected: [1, 2, 3, 4, 5] },
    { args: [[[[1]], [2, 3]]], expected: [1, 2, 3] },
    { args: [[]], expected: [] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] }
  ],
};

