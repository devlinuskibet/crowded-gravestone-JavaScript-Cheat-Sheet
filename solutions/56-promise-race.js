// Exercise 56: Implement Promise.race
// Write promiseRace(promises) that returns a promise that resolves or rejects as soon as the first promise resolves or rejects. Do not use Promise.race.
// Example: promiseRace([slowPromise, fastPromise]) -> fastPromise value
// Hint: Return a new Promise((resolve, reject) => { ... }) and attach .then(resolve, reject) to each item.
// Run:  node run.js 56

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}
