// Exercise 40: Array difference
// Write difference(arr1, arr2) that returns all values from arr1 that are not present in arr2.
// Example: difference([1, 2, 3, 4], [2, 4]) -> [1, 3]
// Hint: Put arr2 in a Set and use arr1.filter(x => !set.has(x)).
// Run:  node run.js 40

function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}
