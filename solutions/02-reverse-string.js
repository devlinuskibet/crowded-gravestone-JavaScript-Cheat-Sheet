// Exercise 02: Reverse a string
// Write reverseString(str) that returns the string backwards.
// Example: reverseString('hello') -> 'olleh'
// Hint: split(''), reverse(), join('').
// Run:  node run.js 02

function reverseString(str) {
  return str.split('').reverse().join('');
}
