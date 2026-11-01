// Exercise 77: Unflatten dotted keys object
// Write unflattenObject(obj) that converts dot-separated object keys into nested objects.
// Example: unflattenObject({ "a.b": 1, "a.c": 2, d: 3 }) -> { a: { b: 1, c: 2 }, d: 3 }
// Hint: For each key, split by "." and traverse down creating empty objects if needed before setting value.
// Run:  node run.js 77

function unflattenObject(obj) {
  const result = {};
  for (const [pathStr, val] of Object.entries(obj)) {
    const parts = pathStr.split('.');
    let curr = result;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (!curr[p] || typeof curr[p] !== 'object') curr[p] = {};
      curr = curr[p];
    }
    curr[parts[parts.length - 1]] = val;
  }
  return result;
}
