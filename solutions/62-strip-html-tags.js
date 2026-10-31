// Exercise 62: Strip HTML tags
// Write stripHtml(html) that removes all HTML tags from a string while leaving the inner text intact.
// Example: stripHtml("<p>Hello <b>World</b>!</p>") -> "Hello World!"
// Hint: Use regex replace(/<[^>]*>/g, "").
// Run:  node run.js 62

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}
