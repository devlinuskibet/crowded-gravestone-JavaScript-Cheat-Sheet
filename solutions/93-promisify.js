// Exercise 93: Promisify callback function
// Write promisify(fn) that transforms a Node.js-style error-first callback function fn(...args, cb) into a function that returns a Promise.
// Example: const readFilePromise = promisify(fs.readFile);
// Hint: Return function(...args) { return new Promise((res, rej) => fn(...args, (err, val) => err ? rej(err) : res(val))); }.
// Run:  node run.js 93

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Promisify callback function",
  fn: promisify,
  tests: [
    {
      call: async (promisify) => {
        const mockFn = (val, cb) => cb(null, val * 2);
        const promisified = promisify(mockFn);
        return await promisified(21);
      },
      expected: 42
    },
    {
      call: async (promisify) => {
        const mockError = (cb) => cb(new Error('fail'));
        const promisified = promisify(mockError);
        try {
          await promisified();
          return 'ok';
        } catch (e) {
          return e.message;
        }
      },
      expected: 'fail'
    }
  ],
};

