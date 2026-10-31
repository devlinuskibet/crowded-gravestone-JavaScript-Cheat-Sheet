// Exercise 70: Majority element
// Write majorityElement(nums) that finds the majority element that appears strictly more than floor(n / 2) times. Assume one always exists.
// Example: majorityElement([2, 2, 1, 1, 1, 2, 2]) -> 2
// Hint: Use Boyer-Moore Voting Algorithm: maintain candidate and count in a single pass O(n) time and O(1) space.
// Run:  node run.js 70

function majorityElement(nums) {
  let candidate = nums[0];
  let count = 0;
  for (const n of nums) {
    if (count === 0) candidate = n;
    count += n === candidate ? 1 : -1;
  }
  return candidate;
}
