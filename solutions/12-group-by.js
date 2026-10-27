// Exercise 12: Group by a key
// Write groupBy(items, key) that groups an array of objects into an object, by the value of key.
// Example: groupBy([{n:'a',t:'x'},{n:'b',t:'y'},{n:'c',t:'x'}], 't') -> { x: [{n:'a',t:'x'},{n:'c',t:'x'}], y: [{n:'b',t:'y'}] }
// Run:  node run.js 12

function groupBy(items, key) {
  const groups = {};
  for (const item of items) {
    const k = item[key];
    if (!groups[k]) groups[k] = [];
    groups[k].push(item);
  }
  return groups;
}
