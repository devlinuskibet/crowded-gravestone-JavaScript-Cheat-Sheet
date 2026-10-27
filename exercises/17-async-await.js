// Exercise 17: Async / await
// A mock function getUser(id) is provided. It returns a Promise: it resolves with { id, name } for ids 1 to 3, and rejects with an Error for any other id.
// Write async function safeUserName(id) that returns the user's name, or 'Unknown' if getUser fails.
// Hint: await inside try/catch.
// Run:  node run.js 17

// Provided for you. Do not change.
function getUser(id) {
  const users = { 1: 'Ada', 2: 'Grace', 3: 'Linus' };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) resolve({ id, name: users[id] });
      else reject(new Error('User not found'));
    }, 5);
  });
}

async function safeUserName(id) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Async / await",
  fn: safeUserName,
  tests: [ {args:[1],expected:'Ada'}, {args:[3],expected:'Linus'}, {args:[4],expected:'Unknown'} ],
};

