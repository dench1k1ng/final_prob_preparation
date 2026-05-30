const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'exam-dataset.json');
const items = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function filterItems({ variant = 'all', part = 'all', type = 'all' }) {
  return items
    .filter((q) => (variant === 'all' ? true : q.variant === variant))
    .filter((q) => (part === 'all' ? true : q.part === part))
    .filter((q) => (type === 'all' ? true : q.type === type));
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}

const v3 = filterItems({ variant: 3 });
assert(v3.length === 24, `Expected v3 to have 24, got ${v3.length}`);

const v3A = filterItems({ variant: 3, part: 'Part A' });
assert(v3A.length === 20, `Expected v3 Part A to have 20, got ${v3A.length}`);

const v3Bfr = filterItems({ variant: 3, part: 'Part B', type: 'FR' });
assert(v3Bfr.length === 4, `Expected v3 Part B FR to have 4, got ${v3Bfr.length}`);

const revealedAnswer = new Set();
const revealedDerivation = new Set();
const q = v3Bfr[0];
revealedAnswer.add(q.id);
revealedDerivation.add(q.id);
assert(revealedAnswer.has(q.id), 'Answer reveal should track item id');
assert(revealedDerivation.has(q.id), 'Derivation reveal should track item id');
revealedAnswer.clear();
revealedDerivation.clear();
assert(!revealedAnswer.has(q.id) && !revealedDerivation.has(q.id), 'Hide all should clear reveal state');

const resolved = new Set();
resolved.add(v3[0].id);
const nextUnresolved = v3.find((x) => !resolved.has(x.id));
assert(nextUnresolved && nextUnresolved.id !== v3[0].id, 'Next unresolved should skip resolved items');

console.log('UI state checks passed');
