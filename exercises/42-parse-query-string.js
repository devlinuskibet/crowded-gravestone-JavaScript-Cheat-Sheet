// Exercise 42: Parse URL query string
// Write parseQueryString(queryString) that converts a query string (with or without leading "?") into an object with decoded URI components.
// Example: parseQueryString("?name=John%20Doe&age=30") -> { name: "John Doe", age: "30" }
// Hint: Remove leading "?" if present, split on "&", then split each pair on "=" and decodeURIComponent both sides.
// Run:  node run.js 42

function parseQueryString(queryString) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Parse URL query string",
  fn: parseQueryString,
  tests: [
    { args: ['?name=John%20Doe&age=30'], expected: { name: 'John Doe', age: '30' } },
    { args: ['a=1&b=2'], expected: { a: '1', b: '2' } },
    { args: [''], expected: {} }
  ],
};

