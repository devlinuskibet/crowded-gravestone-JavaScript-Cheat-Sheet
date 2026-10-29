// Exercise 47: camelCase to kebab-case
// Write camelToKebab(str) that converts lower camelCase strings into hyphen-separated lower case.
// Example: camelToKebab("fontSize") -> "font-size"
// Hint: Use replace(/[A-Z]/g, letter => "-" + letter.toLowerCase()).
// Run:  node run.js 47

function camelToKebab(str) {
  return str.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
}
