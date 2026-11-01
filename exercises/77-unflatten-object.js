// Exercise 77: Unflatten dotted keys object
// Write unflattenObject(obj) that converts dot-separated object keys into nested objects.
// Example: unflattenObject({ "a.b": 1, "a.c": 2, d: 3 }) -> { a: { b: 1, c: 2 }, d: 3 }
// Hint: For each key, split by "." and traverse down creating empty objects if needed before setting value.
// Run:  node run.js 77

function unflattenObject(obj) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Unflatten dotted keys object",
  fn: unflattenObject,
  tests: [
    { args: [{ "a.b": 1, "a.c": 2, d: 3 }], expected: { a: { b: 1, c: 2 }, d: 3 } },
    { args: [{ "user.profile.name": "Alice" }], expected: { user: { profile: { name: "Alice" } } } },
    { args: [{}], expected: {} }
  ],
};

