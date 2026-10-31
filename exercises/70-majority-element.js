// Exercise 70: Majority element
// Write majorityElement(nums) that finds the majority element that appears strictly more than floor(n / 2) times. Assume one always exists.
// Example: majorityElement([2, 2, 1, 1, 1, 2, 2]) -> 2
// Hint: Use Boyer-Moore Voting Algorithm: maintain candidate and count in a single pass O(n) time and O(1) space.
// Run:  node run.js 70

function majorityElement(nums) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Majority element",
  fn: majorityElement,
  tests: [
    { args: [[3, 2, 3]], expected: 3 },
    { args: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
    { args: [[1]], expected: 1 },
    { args: [[5, 5, 5, 1, 2, 5]], expected: 5 }
  ],
};

