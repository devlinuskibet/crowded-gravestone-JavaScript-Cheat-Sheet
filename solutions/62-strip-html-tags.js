// Exercise 62: Strip HTML tags
// Write stripHtml(html) that removes all HTML tags from a string while leaving the inner text intact.
// Example: stripHtml("<p>Hello <b>World</b>!</p>") -> "Hello World!"
// Hint: Use regex replace(/<[^>]*>/g, "").
// Run:  node run.js 62

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Strip HTML tags",
  fn: stripHtml,
  tests: [
    { args: ["<p>Hello <b>World</b>!</p>"], expected: "Hello World!" },
    { args: ["No tags here"], expected: "No tags here" },
    { args: ["<a href='https://example.com'>Click me</a>"], expected: "Click me" },
    { args: ["<div><span></span></div>"], expected: "" }
  ],
};

