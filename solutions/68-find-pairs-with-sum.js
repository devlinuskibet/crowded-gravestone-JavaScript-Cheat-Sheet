// Exercise 68: Find pairs with sum
// Write findPairs(nums, target) that returns all unique pairs [a, b] (with a <= b) that add up to target, sorted by the first element.
// Example: findPairs([1, 2, 3, 4, 3, 5], 6) -> [[1, 5], [2, 4], [3, 3]]
// Hint: Use a Set to track seen numbers and another Set to store found serialized pairs to ensure uniqueness.
// Run:  node run.js 68

function findPairs(nums, target) {
  const seen = new Set();
  const pairs = new Map();
  for (const n of nums) {
    const comp = target - n;
    if (seen.has(comp)) {
      const a = Math.min(n, comp);
      const b = Math.max(n, comp);
      pairs.set(`${a},${b}`, [a, b]);
    }
    seen.add(n);
  }
  return Array.from(pairs.values()).sort((p1, p2) => p1[0] - p2[0]);
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Find pairs with sum",
  fn: findPairs,
  tests: [
    { args: [[1, 2, 3, 4, 3, 5], 6], expected: [[1, 5], [2, 4], [3, 3]] },
    { args: [[1, 2, 3], 10], expected: [] },
    { args: [[0, -1, 2, -3, 1], -2], expected: [[-3, 1]] },
    { args: [[], 5], expected: [] }
  ],
};

