// Exercise 10: Capitalise each word
// Write capitalizeWords(sentence) that makes the first letter of every word a capital and the rest lowercase.
// Example: capitalizeWords('hello world') -> 'Hello World'
// Hint: split(' '), map(), join(' ')
// Run:  node run.js 10

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}
