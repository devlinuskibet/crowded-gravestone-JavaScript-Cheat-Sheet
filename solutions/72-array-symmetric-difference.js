// Exercise 72: Array symmetric difference
// Write symmetricDifference(arr1, arr2) that returns unique elements that are in either arr1 or arr2, but not both.
// Example: symmetricDifference([1, 2, 3], [3, 4, 5]) -> [1, 2, 4, 5]
// Hint: Put both in Sets s1 and s2; find elements in s1 not in s2, and elements in s2 not in s1.
// Run:  node run.js 72

function symmetricDifference(arr1, arr2) {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  const result = [];
  for (const x of s1) if (!s2.has(x)) result.push(x);
  for (const x of s2) if (!s1.has(x)) result.push(x);
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Array symmetric difference",
  fn: symmetricDifference,
  tests: [
    { args: [[1, 2, 3], [3, 4, 5]], expected: [1, 2, 4, 5] },
    { args: [[1, 2], [1, 2]], expected: [] },
    { args: [[1, 2, 2], [3]], expected: [1, 2, 3] },
    { args: [[], [1, 2]], expected: [1, 2] }
  ],
};

