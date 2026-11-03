// Exercise 107: N-th Fibonacci number
// Write fib(n) that returns the n-th Fibonacci number (where fib(0) = 0, fib(1) = 1, fib(2) = 1, etc.) in O(n) time.
// Example: fib(6) -> 8
// Hint: Use iteration with two variables [a, b] = [b, a + b] for n steps.
// Run:  node run.js 107

function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
