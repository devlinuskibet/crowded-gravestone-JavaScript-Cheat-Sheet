// Exercise 67: Compact an array
// Write compact(arr) that creates a new array with all falsy values (false, null, 0, "", undefined, NaN) filtered out.
// Example: compact([0, 1, false, 2, "", 3, null, undefined, NaN]) -> [1, 2, 3]
// Hint: Use arr.filter(Boolean).
// Run:  node run.js 67

function compact(arr) {
  return arr.filter(Boolean);
}
