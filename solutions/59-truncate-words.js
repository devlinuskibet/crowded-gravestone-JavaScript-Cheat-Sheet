// Exercise 59: Truncate by word count
// Write truncateWords(str, numWords) that truncates str to at most numWords whole words and appends "..." if words were cut off. If the string has fewer or equal words, return it unmodified.
// Example: truncateWords("The quick brown fox jumps", 3) -> "The quick brown..."
// Hint: Split by whitespace, slice up to numWords, and join with space, adding "..." if original words length > numWords.
// Run:  node run.js 59

function truncateWords(str, numWords) {
  if (!str.trim()) return '';
  const words = str.trim().split(/\s+/);
  if (words.length <= numWords) return str;
  return words.slice(0, numWords).join(' ') + '...';
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Truncate by word count",
  fn: truncateWords,
  tests: [
    { args: ["The quick brown fox jumps", 3], expected: "The quick brown..." },
    { args: ["Hello world", 5], expected: "Hello world" },
    { args: ["One two three", 3], expected: "One two three" },
    { args: ["", 3], expected: "" }
  ],
};

