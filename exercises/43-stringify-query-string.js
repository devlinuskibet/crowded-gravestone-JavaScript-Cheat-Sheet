// Exercise 43: Stringify query string
// Write stringifyQueryString(params) that serializes an object into a URI-encoded query string with keys sorted alphabetically and joined with "&".
// Example: stringifyQueryString({ name: "John Doe", age: 30 }) -> "age=30&name=John%20Doe"
// Hint: Get Object.keys(params).sort(), then map each key to encodeURIComponent(k)=encodeURIComponent(params[k]) and join("&").
// Run:  node run.js 43

function stringifyQueryString(params) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Stringify query string",
  fn: stringifyQueryString,
  tests: [
    { args: [{ name: 'John Doe', age: 30 }], expected: 'age=30&name=John%20Doe' },
    { args: [{ b: 'hello world', a: 1 }], expected: 'a=1&b=hello%20world' },
    { args: [{}], expected: '' }
  ],
};

