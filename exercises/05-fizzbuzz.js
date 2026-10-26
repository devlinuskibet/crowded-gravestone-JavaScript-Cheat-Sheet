// Exercise 05: FizzBuzz
// Write fizzBuzz(n) that returns an array of strings from 1 to n.
// For multiples of 3 use 'Fizz', for multiples of 5 use 'Buzz', for multiples of both use 'FizzBuzz'. Otherwise use the number as a string.
// Example: fizzBuzz(5) -> ['1','2','Fizz','4','Buzz']
// Hint: check the multiples of both (15) first.
// Run:  node run.js 05

function fizzBuzz(n) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "FizzBuzz",
  fn: fizzBuzz,
  tests: [ {args:[5],expected:['1','2','Fizz','4','Buzz']}, {args:[1],expected:['1']}, {args:[15],expected:['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']} ],
};

