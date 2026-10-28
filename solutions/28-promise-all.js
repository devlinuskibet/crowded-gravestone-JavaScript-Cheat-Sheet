// Exercise 28: Implement Promise.all
// Write promiseAll(promises) that returns a Promise resolving to an array of results when all input promises fulfill, or rejects as soon as one rejects. Do not use Promise.all.
// Example: await promiseAll([Promise.resolve(1), Promise.resolve(2)]) -> [1, 2]
// Hint: Create a new Promise; maintain a results array and a completed count. Increment count in each .then() callback.
// Run:  node run.js 28

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const list = Array.from(promises);
    if (list.length === 0) return resolve([]);
    const results = new Array(list.length);
    let completed = 0;
    list.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        completed++;
        if (completed === list.length) {
          resolve(results);
        }
      }, reject);
    });
  });
}
