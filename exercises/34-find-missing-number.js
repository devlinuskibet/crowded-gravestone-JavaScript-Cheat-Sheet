// Exercise 34: Find missing number
// Given an array nums containing n distinct numbers in range [0, n], return the only number in range missing from the array.
// Example: missingNumber([3, 0, 1]) -> 2
// Hint: The sum of 0 to n is (n * (n + 1)) / 2. Subtract the sum of the array from this expected sum.
// Run:  node run.js 34

function missingNumber(nums) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Find missing number",
  fn: missingNumber,
  tests: [
    { args: [[3, 0, 1]], expected: 2 },
    { args: [[0, 1]], expected: 2 },
    { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 }
  ],
};

