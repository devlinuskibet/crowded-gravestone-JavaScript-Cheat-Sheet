// Exercise 42: Parse URL query string
// Write parseQueryString(queryString) that converts a query string (with or without leading "?") into an object with decoded URI components.
// Example: parseQueryString("?name=John%20Doe&age=30") -> { name: "John Doe", age: "30" }
// Hint: Remove leading "?" if present, split on "&", then split each pair on "=" and decodeURIComponent both sides.
// Run:  node run.js 42

function parseQueryString(queryString) {
  const result = {};
  if (!queryString) return result;
  const str = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  if (!str) return result;
  const pairs = str.split('&');
  for (const pair of pairs) {
    if (!pair) continue;
    const [key, val = ''] = pair.split('=');
    result[decodeURIComponent(key)] = decodeURIComponent(val);
  }
  return result;
}
