// Exercise 10: Capitalise each word
// Write capitalizeWords(sentence) that makes the first letter of every word a capital and the rest lowercase.
// Example: capitalizeWords('hello world') -> 'Hello World'
// Hint: split(' '), map(), join(' ')
// Run:  node run.js 10

function capitalizeWords(sentence) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Capitalise each word",
  fn: capitalizeWords,
  tests: [ {args:['hello world'],expected:'Hello World'}, {args:['javaScript is FUN'],expected:'Javascript Is Fun'}, {args:['linus'],expected:'Linus'} ],
};

