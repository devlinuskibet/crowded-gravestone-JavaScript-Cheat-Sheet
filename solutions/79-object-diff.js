// Exercise 79: Object difference comparison
// Write objectDiff(obj1, obj2) that compares shallow properties and returns { added: string[], removed: string[], updated: string[] } sorted alphabetically.
// Example: objectDiff({ a: 1, b: 2 }, { b: 3, c: 4 }) -> { added: ["c"], removed: ["a"], updated: ["b"] }
// Hint: Check keys in obj1 vs obj2: removed are in obj1 not obj2; added are in obj2 not obj1; updated are in both but obj1[k] !== obj2[k].
// Run:  node run.js 79

function objectDiff(obj1, obj2) {
  const keys1 = new Set(Object.keys(obj1));
  const keys2 = new Set(Object.keys(obj2));
  const added = [];
  const removed = [];
  const updated = [];
  for (const k of keys2) {
    if (!keys1.has(k)) added.push(k);
    else if (obj1[k] !== obj2[k]) updated.push(k);
  }
  for (const k of keys1) {
    if (!keys2.has(k)) removed.push(k);
  }
  return {
    added: added.sort(),
    removed: removed.sort(),
    updated: updated.sort()
  };
}
