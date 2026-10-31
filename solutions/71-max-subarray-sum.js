// Exercise 71: Maximum subarray sum
// Write maxSubarraySum(nums) that finds the contiguous subarray with the largest sum and returns that sum (Kadane’s algorithm).
// Example: maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -> 6
// Hint: Track currentSum = Math.max(n, currentSum + n) and maxSum = Math.max(maxSum, currentSum).
// Run:  node run.js 71

function maxSubarraySum(nums) {
  if (nums.length === 0) return 0;
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
