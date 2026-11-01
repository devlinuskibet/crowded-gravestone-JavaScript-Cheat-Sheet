// Exercise 79: Object difference comparison
// Write objectDiff(obj1, obj2) that compares shallow properties and returns { added: string[], removed: string[], updated: string[] } sorted alphabetically.
// Example: objectDiff({ a: 1, b: 2 }, { b: 3, c: 4 }) -> { added: ["c"], removed: ["a"], updated: ["b"] }
// Hint: Check keys in obj1 vs obj2: removed are in obj1 not obj2; added are in obj2 not obj1; updated are in both but obj1[k] !== obj2[k].
// Run:  node run.js 79

function objectDiff(obj1, obj2) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Object difference comparison",
  fn: objectDiff,
  tests: [
    { args: [{ a: 1, b: 2 }, { b: 3, c: 4 }], expected: { added: ["c"], removed: ["a"], updated: ["b"] } },
    { args: [{ x: 10 }, { x: 10 }], expected: { added: [], removed: [], updated: [] } },
    { args: [{}, { a: 1 }], expected: { added: ["a"], removed: [], updated: [] } }
  ],
};

