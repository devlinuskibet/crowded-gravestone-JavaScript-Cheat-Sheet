// Exercise 37: Binary search
// Given a sorted array nums and target, return the index of target or -1 if target is not found. Must run in O(log n).
// Example: binarySearch([-1, 0, 3, 5, 9, 12], 9) -> 4
// Hint: Maintain left and right pointers; compute mid = Math.floor((left + right) / 2) and adjust pointers.
// Run:  node run.js 37

function binarySearch(nums, target) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Binary search",
  fn: binarySearch,
  tests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { args: [[5], 5], expected: 0 },
    { args: [[], 1], expected: -1 }
  ],
};

