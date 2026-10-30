// Exercise 56: Implement Promise.race
// Write promiseRace(promises) that returns a promise that resolves or rejects as soon as the first promise resolves or rejects. Do not use Promise.race.
// Example: promiseRace([slowPromise, fastPromise]) -> fastPromise value
// Hint: Return a new Promise((resolve, reject) => { ... }) and attach .then(resolve, reject) to each item.
// Run:  node run.js 56

function promiseRace(promises) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Implement Promise.race",
  fn: promiseRace,
  tests: [
    {
      call: async (promiseRace) => {
        const p1 = new Promise(r => setTimeout(() => r('slow'), 40));
        const p2 = new Promise(r => setTimeout(() => r('fast'), 10));
        return await promiseRace([p1, p2]);
      },
      expected: 'fast'
    },
    {
      call: async (promiseRace) => {
        const p1 = new Promise((_, reject) => setTimeout(() => reject(new Error('boom')), 10));
        p1.catch(() => {});
        const p2 = new Promise(r => setTimeout(() => r('ok'), 40));
        try {
          await promiseRace([p1, p2]);
          return 'no';
        } catch (e) {
          return e.message;
        }
      },
      expected: 'boom'
    }
  ],
};

