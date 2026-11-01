// Exercise 81: Deep freeze an object
// Write deepFreeze(obj) that recursively applies Object.freeze to obj and all its nested object properties. Returns the frozen object.
// Example: deepFreeze(o); Object.isFrozen(o.nested) -> true
// Hint: Call Object.freeze(obj), then iterate Object.values(obj) recursively freezing non-null objects.
// Run:  node run.js 81

function deepFreeze(obj) {
  Object.freeze(obj);
  for (const val of Object.values(obj)) {
    if (val !== null && typeof val === 'object' && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  }
  return obj;
}
