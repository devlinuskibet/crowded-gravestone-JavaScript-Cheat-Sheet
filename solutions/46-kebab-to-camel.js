// Exercise 46: Kebab-case to camelCase
// Write kebabToCamel(str) that converts hyphen-separated words into lower camelCase.
// Example: kebabToCamel("background-color") -> "backgroundColor"
// Hint: Use replace(/-([a-z0-9])/gi, (_, letter) => letter.toUpperCase()).
// Run:  node run.js 46

function kebabToCamel(str) {
  return str.replace(/-([a-z0-9])/gi, (_, letter) => letter.toUpperCase());
}
