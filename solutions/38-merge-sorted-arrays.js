// Exercise 38: Merge sorted arrays
// Write mergeSorted(arr1, arr2) that merges two already-sorted arrays into one ascending array in O(n + m) time.
// Example: mergeSorted([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]
// Hint: Use two indices i and j to compare elements and push the smaller one to the result array.
// Run:  node run.js 38

function mergeSorted(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Merge sorted arrays",
  fn: mergeSorted,
  tests: [
    { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[1, 2, 3], []], expected: [1, 2, 3] },
    { args: [[], [4, 5]], expected: [4, 5] },
    { args: [[1, 5, 9], [2, 3, 10, 12]], expected: [1, 2, 3, 5, 9, 10, 12] }
  ],
};

