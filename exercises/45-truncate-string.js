// Exercise 45: Truncate string
// Write truncate(str, maxLength) that truncates str if it exceeds maxLength. When truncated, append "..." such that total length equals maxLength. If maxLength <= 3, truncate without "...".
// Example: truncate("Hello World", 8) -> "Hello..."
// Hint: Check str.length <= maxLength first. If maxLength <= 3 return str.slice(0, maxLength); otherwise str.slice(0, maxLength - 3) + "...".
// Run:  node run.js 45

function truncate(str, maxLength) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Truncate string",
  fn: truncate,
  tests: [
    { args: ['Hello World', 8], expected: 'Hello...' },
    { args: ['Hello', 10], expected: 'Hello' },
    { args: ['Programming', 4], expected: 'P...' },
    { args: ['Hey', 2], expected: 'He' }
  ],
};

