// Exercise 55: Safe property set by path
// Write set(obj, path, value) that sets the value at path (e.g. "a.b.c"), creating intermediate objects if they do not exist. Returns obj.
// Example: set({}, "a.b", 123) -> { a: { b: 123 } }
// Hint: Split path by "." and iterate up to the second-to-last key, creating {} if needed, then assign the final key.
// Run:  node run.js 55

function set(obj, path, value) {
  const parts = Array.isArray(path) ? path : path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (current[key] === null || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[parts[parts.length - 1]] = value;
  return obj;
}
