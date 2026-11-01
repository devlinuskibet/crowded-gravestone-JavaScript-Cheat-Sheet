// Exercise 80: Clean object nulls and undefined
// Write cleanObject(obj) that returns a shallow copy with all properties having null or undefined values stripped out.
// Example: cleanObject({ a: 1, b: null, c: undefined, d: 0 }) -> { a: 1, d: 0 }
// Hint: Filter keys where obj[k] !== null && obj[k] !== undefined.
// Run:  node run.js 80

function cleanObject(obj) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Clean object nulls and undefined",
  fn: cleanObject,
  tests: [
    { args: [{ a: 1, b: null, c: undefined, d: 0, e: "" }], expected: { a: 1, d: 0, e: "" } },
    { args: [{ x: null, y: undefined }], expected: {} },
    { args: [{ valid: true }], expected: { valid: true } }
  ],
};

