// Exercise 39: Array intersection
// Write intersection(arr1, arr2) that returns an array of unique values present in both arrays.
// Example: intersection([1, 2, 2, 1], [2, 2]) -> [2]
// Hint: Use a Set for arr2, then filter arr1 with deduplication using a result Set.
// Run:  node run.js 39

function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const common = new Set();
  for (const x of arr1) {
    if (set2.has(x)) {
      common.add(x);
    }
  }
  return Array.from(common);
}
