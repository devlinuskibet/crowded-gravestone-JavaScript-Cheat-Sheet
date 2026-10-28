// Exercise 33: Deep clone an object
// Write deepClone(val) that creates a deep copy of nested objects, arrays, and primitive values.
// Example: const b = deepClone(a); b.nested.x = 99; // a.nested.x unchanged
// Hint: Check if val is null or not an object. If array, map with deepClone; if object, copy entries recursively.
// Run:  node run.js 33

function deepClone(val) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Deep clone an object",
  fn: deepClone,
  tests: [
    {
      call: (deepClone) => {
        const orig = { a: 1, b: { c: [2, 3] } };
        const copy = deepClone(orig);
        copy.b.c.push(4);
        return { origLen: orig.b.c.length, copyLen: copy.b.c.length };
      },
      expected: { origLen: 2, copyLen: 3 }
    },
    { args: [42], expected: 42 },
    { args: [['hello', { foo: 'bar' }]], expected: ['hello', { foo: 'bar' }] }
  ],
};

