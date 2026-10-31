// Exercise 63: Title case with exceptions
// Write titleCase(str) that capitalizes the first letter of each word except minor words ("a", "an", "the", "and", "but", "or", "for", "in", "of", "on", "at", "to", "by") unless the minor word is the first word.
// Example: titleCase("the lord of the rings") -> "The Lord of the Rings"
// Hint: Split words, map with index, check exceptions list, and always capitalize index === 0.
// Run:  node run.js 63

function titleCase(str) {
  if (!str.trim()) return '';
  const minors = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'in', 'of', 'on', 'at', 'to', 'by']);
  const words = str.toLowerCase().split(/\s+/);
  return words.map((w, i) => {
    if (i > 0 && minors.has(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Title case with exceptions",
  fn: titleCase,
  tests: [
    { args: ["the lord of the rings"], expected: "The Lord of the Rings" },
    { args: ["a tale of two cities"], expected: "A Tale of Two Cities" },
    { args: ["war and peace"], expected: "War and Peace" },
    { args: ["hello"], expected: "Hello" }
  ],
};

