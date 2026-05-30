const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'exam-dataset.json');
const items = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}

assert(Array.isArray(items), 'Dataset should be an array');
assert(items.length === 240, `Expected 240 items, got ${items.length}`);

const byVariant = new Map();
for (const item of items) {
  if (!byVariant.has(item.variant)) byVariant.set(item.variant, []);
  byVariant.get(item.variant).push(item);
}

assert(byVariant.size === 10, `Expected 10 variants, got ${byVariant.size}`);

for (let v = 1; v <= 10; v += 1) {
  const arr = byVariant.get(v) || [];
  assert(arr.length === 24, `Variant ${v}: expected 24 items, got ${arr.length}`);
  const mcq = arr.filter((x) => x.type === 'MCQ');
  const fr = arr.filter((x) => x.type === 'FR');
  assert(mcq.length === 20, `Variant ${v}: expected 20 MCQ, got ${mcq.length}`);
  assert(fr.length === 4, `Variant ${v}: expected 4 FR, got ${fr.length}`);
}

for (const item of items) {
  assert(item.solution_ru_steps && item.solution_ru_steps.length > 0, `Missing RU steps for ${item.id}`);
  assert(typeof item.solution_en_explanation === 'string' && item.solution_en_explanation.length > 0, `Missing EN explanation for ${item.id}`);
  assert(typeof item.final_answer === 'string' && item.final_answer.length > 0, `Missing final answer for ${item.id}`);
  if (item.type === 'MCQ') {
    assert(/^[A-E]$/.test(item.final_answer), `MCQ answer must be A-E in ${item.id}`);
  }
  if (item.type === 'FR') {
    assert(!/^[A-E]$/.test(item.final_answer), `FR answer must not be A-E in ${item.id}`);
  }
}

console.log('Dataset validation passed:', {
  variants: byVariant.size,
  total: items.length,
});
