// Practice runner. Usage:
//   node run.js            run every exercise
//   node run.js 05         run only exercise 05
//   node run.js --solutions   run the answer key (to check the runner works)
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const args = process.argv.slice(2);
const useSolutions = args.includes('--solutions');
const filter = args.find(a => !a.startsWith('--'));
const dir = path.join(__dirname, useSolutions ? 'solutions' : 'exercises');

(async () => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .filter(f => !filter || f.startsWith(filter));
  let passedExercises = 0;

  for (const file of files) {
    const { title, fn, tests } = require(path.join(dir, file));
    let passed = 0;
    const failures = [];
    for (const t of tests) {
      try {
        const actual = t.call ? await t.call(fn) : await fn(...t.args);
        assert.deepStrictEqual(actual, t.expected);
        passed++;
      } catch (err) {
        const input = t.call ? '(custom test)' : JSON.stringify(t.args);
        let got;
        try { got = JSON.stringify(await (t.call ? t.call(fn) : fn(...t.args))); } catch (e) { got = 'error: ' + e.message; }
        failures.push(`      input: ${input}\n      expected: ${JSON.stringify(t.expected)}\n      got: ${got}`);
      }
    }
    const ok = passed === tests.length;
    if (ok) passedExercises++;
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${file.replace('.js', '')}  (${title})  ${passed}/${tests.length}`);
    if (!ok) failures.slice(0, 2).forEach(f => console.log(f));
  }
  console.log(`\n${passedExercises} of ${files.length} exercises passing.`);
})();
