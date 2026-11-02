// Exercise 89: Implement Promise.allSettled
// Write promiseAllSettled(promises) that returns a promise resolving to an array of { status: "fulfilled", value } or { status: "rejected", reason } for each promise. Never rejects.
// Example: await promiseAllSettled([Promise.resolve(1), Promise.reject("err")])
// Hint: Wrap each promise in .then(value => ({ status: "fulfilled", value }), reason => ({ status: "rejected", reason })) and wait for all.
// Run:  node run.js 89

function promiseAllSettled(promises) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Implement Promise.allSettled",
  fn: promiseAllSettled,
  tests: [
    {
      call: async (promiseAllSettled) => {
        const p1 = Promise.resolve(42);
        const p2 = Promise.reject(new Error('fail'));
        p2.catch(() => {});
        const res = await promiseAllSettled([p1, p2]);
        return res.map(r => r.status);
      },
      expected: ['fulfilled', 'rejected']
    },
    { call: async (promiseAllSettled) => await promiseAllSettled([]), expected: [] }
  ],
};

