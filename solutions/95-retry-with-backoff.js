// Exercise 95: Retry with exponential backoff
// Write retryWithBackoff(fn, retries, baseDelay = 10) that retries an async operation with exponential delays: baseDelay * 2^attempt between failures before giving up.
// Example: retryWithBackoff(fetchData, 3, 10)
// Hint: Inside a loop up to retries, catch error, await new Promise(r => setTimeout(r, baseDelay * 2**attempt)), and rethrow on last attempt.
// Run:  node run.js 95

async function retryWithBackoff(fn, retries, baseDelay = 10) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, baseDelay * Math.pow(2, attempt)));
      }
    }
  }
  throw lastErr;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Retry with exponential backoff",
  fn: retryWithBackoff,
  tests: [
    {
      call: async (retryWithBackoff) => {
        let attempts = 0;
        const task = async () => {
          attempts++;
          if (attempts < 3) throw new Error('fail');
          return 'success';
        };
        return await retryWithBackoff(task, 3, 5);
      },
      expected: 'success'
    }
  ],
};

