// Exercise 05: FizzBuzz
// Write fizzBuzz(n) that returns an array of strings from 1 to n.
// For multiples of 3 use 'Fizz', for multiples of 5 use 'Buzz', for multiples of both use 'FizzBuzz'. Otherwise use the number as a string.
// Example: fizzBuzz(5) -> ['1','2','Fizz','4','Buzz']
// Hint: check the multiples of both (15) first.
// Run:  node run.js 05

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(String(i));
  }
  return result;
}
