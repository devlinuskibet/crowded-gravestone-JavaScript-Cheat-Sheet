// Exercise 65: Find longest word
// Write longestWord(sentence) that finds the longest word in a sentence, ignoring punctuation. If multiple words have the same maximum length, return the first one.
// Example: longestWord("The quick, brown fox jumps over the lazy dog.") -> "quick"
// Hint: Clean out non-alphanumeric punctuation with regex, split by whitespace, and find maximum length.
// Run:  node run.js 65

function longestWord(sentence) {
  const words = sentence.replace(/[^a-zA-Z0-9\s]/g, '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  let longest = words[0];
  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Find longest word",
  fn: longestWord,
  tests: [
    { args: ["The quick, brown fox jumps over the lazy dog."], expected: "quick" },
    { args: ["A journey of a thousand miles begins with a single step."], expected: "thousand" },
    { args: ["One two three"], expected: "three" },
    { args: [""], expected: "" }
  ],
};

