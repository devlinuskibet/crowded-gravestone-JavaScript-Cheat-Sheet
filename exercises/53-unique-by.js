// Exercise 53: Remove duplicates by key
// Write uniqueBy(arr, key) that returns a new array with duplicates removed based on the property key, keeping the first occurrence.
// Example: uniqueBy([{ id: 1, name: "A" }, { id: 1, name: "B" }], "id") -> [{ id: 1, name: "A" }]
// Hint: Track seen property values in a Set: if (!seen.has(item[key])) { seen.add(item[key]); result.push(item); }
// Run:  node run.js 53

function uniqueBy(arr, key) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Remove duplicates by key",
  fn: uniqueBy,
  tests: [
    { args: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }], 'id'], expected: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] },
    { args: [[{ k: 'x' }, { k: 'x' }], 'k'], expected: [{ k: 'x' }] },
    { args: [[], 'id'], expected: [] }
  ],
};

