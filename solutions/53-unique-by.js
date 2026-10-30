// Exercise 53: Remove duplicates by key
// Write uniqueBy(arr, key) that returns a new array with duplicates removed based on the property key, keeping the first occurrence.
// Example: uniqueBy([{ id: 1, name: "A" }, { id: 1, name: "B" }], "id") -> [{ id: 1, name: "A" }]
// Hint: Track seen property values in a Set: if (!seen.has(item[key])) { seen.add(item[key]); result.push(item); }
// Run:  node run.js 53

function uniqueBy(arr, key) {
  const seen = new Set();
  const result = [];
  for (const item of arr) {
    const val = item[key];
    if (!seen.has(val)) {
      seen.add(val);
      result.push(item);
    }
  }
  return result;
}
