// Exercise 09: Two sum
// Write twoSum(nums, target) that returns the indexes [i, j] of the two numbers that add up to target (i < j).
// Example: twoSum([2, 7, 11, 15], 9) -> [0, 1]
// Hint: store each number you have seen in an object: seen[number] = index. For each new number, check if (target - number) is already in seen.
// Run:  node run.js 09

function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (need in seen) return [seen[need], i];
    seen[nums[i]] = i;
  }
  return null;
}
