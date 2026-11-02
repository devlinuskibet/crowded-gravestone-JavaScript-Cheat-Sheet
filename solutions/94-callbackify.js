// Exercise 94: Callbackify async function
// Write callbackify(asyncFn) that transforms a Promise-returning async function into a Node-style function taking (...args, callback) where callback is cb(err, result).
// Example: const cbFn = callbackify(async () => 123); cbFn((err, res) => ...);
// Hint: Pop callback from args, call asyncFn(...remainingArgs), and attach .then(res => cb(null, res), err => cb(err)).
// Run:  node run.js 94

function callbackify(asyncFn) {
  return function(...args) {
    const cb = args.pop();
    Promise.resolve(asyncFn.apply(this, args))
      .then(res => cb(null, res))
      .catch(err => cb(err));
  };
}
