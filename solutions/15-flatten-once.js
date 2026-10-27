// Exercise 15: Flatten once
// Write flattenOnce(arr) that flattens an array ONE level deep.
// Example: flattenOnce([1, [2, 3], [4, [5]]]) -> [1, 2, 3, 4, [5]]
// Hint: arr.flat() does this, but try it with reduce and concat first.
// Run:  node run.js 15

function flattenOnce(arr) {
  return arr.reduce((flat, item) => flat.concat(item), []);
}
