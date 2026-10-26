# learn: JavaScript practice

108 short exercises, from warm-up to technical interview mastery. You only need Node.js.

## Set up (PowerShell)

```powershell
node -v            # check Node is installed (any recent version works)
cd path\to\learn   # go into this folder
node run.js        # run every exercise
node run.js 05     # run only exercise 05
node run.js --solutions # verify answer keys
```

## How to practise

1. Open `exercises/01-sum-array.js`. Read the comment at the top.
2. Write your code where it says `// YOUR CODE HERE`.
3. Save, then run `node run.js 01`. Green PASS means done. FAIL shows what you gave and what was expected.
4. Only look in `solutions/` after you have tried for at least 10 minutes. Then compare, and try to explain why the solution works.
5. Do not edit anything under the line `// ---- Tests ...`.

## Suggested order

| Level | Exercises | Focus |
|---|---|---|
| 1. Warm-up | 01 to 06 | Basic loops, math, string reversing, FizzBuzz |
| 2. Arrays & Objects Basics | 07 to 12 | Counting patterns, Sets, two sum, capitalization, groupBy |
| 3. Functional & Async Core | 13 to 18 | Filter/reduce, sorting, closures, async/await, object inversion |
| 4. Intermediate Interview | 19 to 30 | Salary net calculation, chunking, deep equality, deep flatten, debounce/throttle, memoization, currying, pipe, Promise.all, retry, EventEmitter |
| 5. Objects, Strings & Algorithms | 31 to 40 | Pick/omit, deep clone, missing number, longest common prefix, valid parentheses, binary search, merge sorted, intersection, difference |
| 6. System Utilities & Patterns | 41 to 58 | LRU Cache, query string parsers, once, string truncate, case formatting, zip/unzip, range, partition, uniqueBy, safe get/set, Promise.race, timeout, tree sum |
| 7. Text & Array Algorithms | 59 to 75 | Truncate words, Caesar cipher, vowel counts, strip HTML, title case, isomorphic strings, longest word, rotate array, compact, pair sum, move zeros, majority element, Kadane max subarray, symmetric difference, product except self, first duplicate, sliding window |
| 8. Advanced Structures & Async | 76 to 108 | Flatten/unflatten objects, mapValues, object diff, clean object, deep freeze, keyBy, compose, partial, negate, TTL memoize, accumulator, flip, Promise.allSettled, async series, parallel limit, delay, promisify, callbackify, backoff retry, Stack, Queue, LinkedList, reverse list, cycle detection, binary tree inorder/depth, Trie, MinHeap, isPrime, powerOfTwo, Fibonacci, climbStairs |

## For the interview

- Say your plan out loud before you type: "I will loop through, keep a count, and return it."
- Write the simplest version that works first. Then improve it.
- Test with an empty input and a single item before you say you are done.
- Be ready to say the cost: a single loop is O(n); a loop inside a loop is O(n squared).
- If you are stuck, say what you have tried and what you would try next.

## Re-do plan

- Week 1: 01 to 30
- Week 2: 31 to 65
- Week 3: 66 to 90
- Week 4: 91 to 108
- Redo the ones you struggled with without looking at the solutions.

See `cheatsheet.md` for the methods used in these exercises.
