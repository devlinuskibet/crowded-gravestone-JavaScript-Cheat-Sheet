// Exercise 21: Deep equality check
// Write deepEqual(a, b) that returns true if two values are strictly equal primitives or structurally equal objects/arrays, and false otherwise.
// Example: deepEqual({ x: [1, 2] }, { x: [1, 2] }) -> true
// Hint: Check strict equality first. Then check if both are non-null objects and compare their keys recursively.
// Run:  node run.js 21

function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
