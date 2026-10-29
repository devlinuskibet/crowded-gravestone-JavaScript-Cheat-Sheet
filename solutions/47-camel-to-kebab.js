// Exercise 47: camelCase to kebab-case
// Write camelToKebab(str) that converts lower camelCase strings into hyphen-separated lower case.
// Example: camelToKebab("fontSize") -> "font-size"
// Hint: Use replace(/[A-Z]/g, letter => "-" + letter.toLowerCase()).
// Run:  node run.js 47

function camelToKebab(str) {
  return str.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "camelCase to kebab-case",
  fn: camelToKebab,
  tests: [
    { args: ['fontSize'], expected: 'font-size' },
    { args: ['borderTopLeftRadius'], expected: 'border-top-left-radius' },
    { args: ['simple'], expected: 'simple' },
    { args: [''], expected: '' }
  ],
};

