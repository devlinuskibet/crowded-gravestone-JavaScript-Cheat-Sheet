// Exercise 81: Deep freeze an object
// Write deepFreeze(obj) that recursively applies Object.freeze to obj and all its nested object properties. Returns the frozen object.
// Example: deepFreeze(o); Object.isFrozen(o.nested) -> true
// Hint: Call Object.freeze(obj), then iterate Object.values(obj) recursively freezing non-null objects.
// Run:  node run.js 81

function deepFreeze(obj) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Deep freeze an object",
  fn: deepFreeze,
  tests: [
    {
      call: (deepFreeze) => {
        const o = { a: 1, b: { c: 2 } };
        deepFreeze(o);
        return Object.isFrozen(o) && Object.isFrozen(o.b);
      },
      expected: true
    },
    {
      call: (deepFreeze) => {
        const arr = [{ x: 10 }];
        deepFreeze(arr);
        return Object.isFrozen(arr) && Object.isFrozen(arr[0]);
      },
      expected: true
    }
  ],
};

