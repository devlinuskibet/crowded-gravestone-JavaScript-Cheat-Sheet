// Exercise 08: Remove duplicates
// Write removeDuplicates(arr) that returns a new array with each value only once, keeping the first occurrence order.
// Example: removeDuplicates([1, 2, 2, 3, 1]) -> [1, 2, 3]
// Hint: a Set remembers values you have seen.
// Run:  node run.js 08

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
