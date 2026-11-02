// Exercise 93: Promisify callback function
// Write promisify(fn) that transforms a Node.js-style error-first callback function fn(...args, cb) into a function that returns a Promise.
// Example: const readFilePromise = promisify(fs.readFile);
// Hint: Return function(...args) { return new Promise((res, rej) => fn(...args, (err, val) => err ? rej(err) : res(val))); }.
// Run:  node run.js 93

function promisify(fn) {
  // YOUR CODE HERE
}
