// Exercise 69: Move zeros to end
// Write moveZeros(nums) that returns a new array with all zeros moved to the end while maintaining the relative order of non-zero elements.
// Example: moveZeros([0, 1, 0, 3, 12]) -> [1, 3, 12, 0, 0]
// Hint: Filter non-zeros and append an array of zeros with length equal to original length minus non-zeros length.
// Run:  node run.js 69

function moveZeros(nums) {
  const nonZeros = nums.filter(x => x !== 0);
  const zerosCount = nums.length - nonZeros.length;
  return nonZeros.concat(new Array(zerosCount).fill(0));
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Move zeros to end",
  fn: moveZeros,
  tests: [
    { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[]], expected: [] }
  ],
};

