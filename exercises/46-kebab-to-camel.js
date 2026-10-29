// Exercise 46: Kebab-case to camelCase
// Write kebabToCamel(str) that converts hyphen-separated words into lower camelCase.
// Example: kebabToCamel("background-color") -> "backgroundColor"
// Hint: Use replace(/-([a-z0-9])/gi, (_, letter) => letter.toUpperCase()).
// Run:  node run.js 46

function kebabToCamel(str) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Kebab-case to camelCase",
  fn: kebabToCamel,
  tests: [
    { args: ['background-color'], expected: 'backgroundColor' },
    { args: ['border-top-left-radius'], expected: 'borderTopLeftRadius' },
    { args: ['simple'], expected: 'simple' },
    { args: [''], expected: '' }
  ],
};

