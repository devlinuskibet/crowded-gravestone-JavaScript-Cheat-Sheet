// Exercise 29: Retry an async operation
// Write retryAsync(fn, retries) that calls async function fn. If it rejects/throws, retry up to retries times before re-throwing the final error.
// Example: retryAsync(fetchData, 3)
// Hint: Use a loop from 0 to retries inside a try/catch, awaiting fn().
// Run:  node run.js 29

async function retryAsync(fn, retries) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}
