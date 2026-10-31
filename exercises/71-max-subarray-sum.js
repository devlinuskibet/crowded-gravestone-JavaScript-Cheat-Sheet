// Exercise 71: Maximum subarray sum
// Write maxSubarraySum(nums) that finds the contiguous subarray with the largest sum and returns that sum (Kadane’s algorithm).
// Example: maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -> 6
// Hint: Track currentSum = Math.max(n, currentSum + n) and maxSum = Math.max(maxSum, currentSum).
// Run:  node run.js 71

function maxSubarraySum(nums) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Maximum subarray sum",
  fn: maxSubarraySum,
  tests: [
    { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { args: [[1]], expected: 1 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[5, 4, -1, 7, 8]], expected: 23 }
  ],
};

