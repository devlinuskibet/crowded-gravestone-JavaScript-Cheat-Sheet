// Exercise 75: Sliding window maximum
// Write maxSlidingWindow(nums, k) that returns the maximum element in each sliding window of size k moving from left to right.
// Example: maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3) -> [3, 3, 5, 5, 6, 7]
// Hint: Iterate windows from i = 0 to nums.length - k, finding Math.max(...nums.slice(i, i + k)).
// Run:  node run.js 75

function maxSlidingWindow(nums, k) {
  if (nums.length === 0 || k <= 0) return [];
  const result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let m = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > m) m = nums[i + j];
    }
    result.push(m);
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Sliding window maximum",
  fn: maxSlidingWindow,
  tests: [
    { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { args: [[1], 1], expected: [1] },
    { args: [[9, 11], 2], expected: [11] },
    { args: [[4, -2], 1], expected: [4, -2] }
  ],
};

