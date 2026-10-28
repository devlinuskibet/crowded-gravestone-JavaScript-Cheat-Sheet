// Exercise 29: Retry an async operation
// Write retryAsync(fn, retries) that calls async function fn. If it rejects/throws, retry up to retries times before re-throwing the final error.
// Example: retryAsync(fetchData, 3)
// Hint: Use a loop from 0 to retries inside a try/catch, awaiting fn().
// Run:  node run.js 29

async function retryAsync(fn, retries) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Retry an async operation",
  fn: retryAsync,
  tests: [
    {
      call: async (retryAsync) => {
        let attempts = 0;
        const fn = async () => {
          attempts++;
          if (attempts < 3) throw new Error('not yet');
          return 'done';
        };
        return await retryAsync(fn, 3);
      },
      expected: 'done'
    },
    {
      call: async (retryAsync) => {
        const fn = async () => { throw new Error('always fails'); };
        try {
          await retryAsync(fn, 2);
          return 'ok';
        } catch (e) {
          return e.message;
        }
      },
      expected: 'always fails'
    }
  ],
};

