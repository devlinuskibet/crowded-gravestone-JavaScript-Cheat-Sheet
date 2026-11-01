// Exercise 80: Clean object nulls and undefined
// Write cleanObject(obj) that returns a shallow copy with all properties having null or undefined values stripped out.
// Example: cleanObject({ a: 1, b: null, c: undefined, d: 0 }) -> { a: 1, d: 0 }
// Hint: Filter keys where obj[k] !== null && obj[k] !== undefined.
// Run:  node run.js 80

function cleanObject(obj) {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val !== null && val !== undefined) {
      result[key] = val;
    }
  }
  return result;
}
