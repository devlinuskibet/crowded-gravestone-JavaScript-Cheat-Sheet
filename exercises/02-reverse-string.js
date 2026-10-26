// Exercise 02: Reverse a string
// Write reverseString(str) that returns the string backwards.
// Example: reverseString('hello') -> 'olleh'
// Hint: split(''), reverse(), join('').
// Run:  node run.js 02

function reverseString(str) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Reverse a string",
  fn: reverseString,
  tests: [ {args:['hello'],expected:'olleh'}, {args:[''],expected:''}, {args:['a'],expected:'a'}, {args:['Linus'],expected:'suniL'} ],
};

