// Exercise 73: Product except self
// Write productExceptSelf(nums) that returns an array where output[i] is equal to the product of all elements of nums except nums[i], without using division.
// Example: productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
// Hint: Compute prefix products in a forward pass and multiply suffix products in a backward pass. Normalize -0 to 0.
// Run:  node run.js 73

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    const val = result[i] * suffix;
    result[i] = val === 0 ? 0 : val;
    suffix *= nums[i];
  }
  return result;
}
