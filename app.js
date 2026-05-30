const STORAGE = {
  resolved: 'exam-prep-resolved-v1',
  mode: 'exam-prep-mode-v1',
};

const state = {
  dataset: Array.isArray(window.EXAM_DATASET) ? window.EXAM_DATASET : [],
  variant: 1,
  part: 'all',
  type: 'all',
  mode: localStorage.getItem(STORAGE.mode) || 'full',
  currentId: null,
  filtered: [],
  resolved: loadResolved(),
  revealAnswer: new Set(),
  revealDerivation: new Set(),
};

const el = {
  total: document.getElementById('stat-total'),
  resolved: document.getElementById('stat-resolved'),
  filtered: document.getElementById('stat-filtered'),
  variant: document.getElementById('variant-select'),
  part: document.getElementById('part-select'),
  type: document.getElementById('type-select'),
  modeCompact: document.getElementById('mode-compact'),
  modeFull: document.getElementById('mode-full'),
  nextUnresolved: document.getElementById('next-unresolved'),
  hideAll: document.getElementById('hide-all'),
  qList: document.getElementById('question-list'),
  card: document.getElementById('question-card'),
  meta: document.getElementById('question-meta'),
  title: document.getElementById('question-title'),
  tags: document.getElementById('question-tags'),
  prompt: document.getElementById('question-prompt'),
  showAnswer: document.getElementById('show-answer'),
  showDerivation: document.getElementById('show-derivation'),
  markResolved: document.getElementById('mark-resolved'),
  prevQuestion: document.getElementById('prev-question'),
  nextQuestion: document.getElementById('next-question'),
  answerBox: document.getElementById('answer-box'),
  finalAnswer: document.getElementById('final-answer'),
  ruBox: document.getElementById('ru-box'),
  ruSteps: document.getElementById('ru-steps'),
  enBox: document.getElementById('en-box'),
  enExplanation: document.getElementById('en-explanation'),
  keyCaption: document.getElementById('key-caption'),
  keyGrid: document.getElementById('key-grid'),
};

init();

function loadResolved() {
  try {
    const raw = localStorage.getItem(STORAGE.resolved);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function persistResolved() {
  localStorage.setItem(STORAGE.resolved, JSON.stringify([...state.resolved]));
}

function init() {
  if (!state.dataset.length) {
    el.prompt.textContent = 'Dataset missing. Run: node tools/generate_exam_assets.js';
    return;
  }

  fillVariants();
  bindEvents();
  applyModeUI();
  applyFilters();
}

function fillVariants() {
  const options = ['<option value="all">All variants</option>'];
  for (let i = 1; i <= 10; i += 1) {
    options.push(`<option value="${i}" ${i === 1 ? 'selected' : ''}>V${i}</option>`);
  }
  el.variant.innerHTML = options.join('');
}

function bindEvents() {
  el.variant.addEventListener('change', () => {
    state.variant = el.variant.value === 'all' ? 'all' : Number(el.variant.value);
    applyFilters();
  });

  el.part.addEventListener('change', () => {
    state.part = el.part.value;
    applyFilters();
  });

  el.type.addEventListener('change', () => {
    state.type = el.type.value;
    applyFilters();
  });

  el.modeCompact.addEventListener('click', () => setMode('compact'));
  el.modeFull.addEventListener('click', () => setMode('full'));

  el.nextUnresolved.addEventListener('click', jumpNextUnresolved);
  el.prevQuestion.addEventListener('click', () => moveQuestion(-1));
  el.nextQuestion.addEventListener('click', () => moveQuestion(1));

  el.hideAll.addEventListener('click', () => {
    state.revealAnswer.clear();
    state.revealDerivation.clear();
    renderQuestion();
  });

  el.showAnswer.addEventListener('click', () => {
    const q = currentQuestion();
    if (!q) return;
    state.revealAnswer.add(q.id);
    renderQuestion();
  });

  el.showDerivation.addEventListener('click', () => {
    const q = currentQuestion();
    if (!q) return;
    state.revealAnswer.add(q.id);
    state.revealDerivation.add(q.id);
    renderQuestion();
  });

  el.markResolved.addEventListener('click', () => {
    const q = currentQuestion();
    if (!q) return;
    if (state.resolved.has(q.id)) {
      state.resolved.delete(q.id);
    } else {
      state.resolved.add(q.id);
    }
    persistResolved();
    renderAll();
  });
}

function setMode(mode) {
  state.mode = mode;
  localStorage.setItem(STORAGE.mode, mode);
  applyModeUI();
}

function applyModeUI() {
  const compact = state.mode === 'compact';
  el.card.classList.toggle('compact', compact);
  el.modeCompact.classList.toggle('active', compact);
  el.modeFull.classList.toggle('active', !compact);
}

function applyFilters() {
  state.filtered = state.dataset
    .filter((q) => (state.variant === 'all' ? true : q.variant === state.variant))
    .filter((q) => (state.part === 'all' ? true : q.part === state.part))
    .filter((q) => (state.type === 'all' ? true : q.type === state.type))
    .sort((a, b) => {
      if (a.variant !== b.variant) return a.variant - b.variant;
      if (a.part !== b.part) return a.part.localeCompare(b.part);
      return a.question_no - b.question_no;
    });

  if (!state.filtered.length) {
    state.currentId = null;
  } else if (!state.currentId || !state.filtered.some((q) => q.id === state.currentId)) {
    state.currentId = state.filtered[0].id;
  }

  renderAll();
}

function currentQuestion() {
  return state.filtered.find((q) => q.id === state.currentId) || null;
}

function renderAll() {
  renderStats();
  renderQuestionList();
  renderQuestion();
  renderKeyPanel();
}

function renderStats() {
  el.total.textContent = state.dataset.length;
  el.resolved.textContent = state.resolved.size;
  el.filtered.textContent = state.filtered.length;
}

function renderQuestionList() {
  if (!state.filtered.length) {
    el.qList.innerHTML = '<p>No items for selected filter.</p>';
    return;
  }

  el.qList.innerHTML = state.filtered
    .map((q) => {
      const active = q.id === state.currentId ? 'active' : '';
      const done = state.resolved.has(q.id) ? 'done' : '';
      const label = `${q.variant}${q.part === 'Part A' ? 'A' : 'B'}-${q.question_no}`;
      return `<button type="button" class="nav-chip ${active} ${done}" data-id="${q.id}">${label}</button>`;
    })
    .join('');

  for (const node of el.qList.querySelectorAll('button[data-id]')) {
    node.addEventListener('click', () => {
      state.currentId = node.dataset.id;
      renderAll();
    });
  }
}

function renderQuestion() {
  const q = currentQuestion();
  if (!q) {
    el.meta.textContent = 'No question selected';
    el.title.textContent = '';
    el.prompt.textContent = '';
    el.tags.innerHTML = '';
    el.answerBox.classList.add('hidden');
    el.ruBox.classList.add('hidden');
    el.enBox.classList.add('hidden');
    el.prevQuestion.disabled = true;
    el.nextQuestion.disabled = true;
    return;
  }

  el.meta.textContent = `Variant ${q.variant} · ${q.part} · ${q.type}`;
  el.title.textContent = `Question ${q.question_no}`;
  el.prompt.textContent = q.prompt;
  el.tags.innerHTML = q.tags.map((t) => `<span class="tag">${t}</span>`).join('');

  const answerVisible = state.revealAnswer.has(q.id);
  const derivationVisible = state.revealDerivation.has(q.id);
  const finalAnswer = typeof q.final_answer === 'string' ? q.final_answer : String(q.final_answer ?? '');
  const ruSteps = Array.isArray(q.solution_ru_steps) ? q.solution_ru_steps : [];
  const enExplanation =
    typeof q.solution_en_explanation === 'string' ? q.solution_en_explanation : String(q.solution_en_explanation ?? '');

  el.answerBox.classList.toggle('hidden', !answerVisible);
  el.finalAnswer.textContent = finalAnswer;

  el.ruBox.classList.toggle('hidden', !derivationVisible);
  el.enBox.classList.toggle('hidden', !derivationVisible);
  el.ruSteps.innerHTML = ruSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('');
  el.enExplanation.textContent = enExplanation;

  const done = state.resolved.has(q.id);
  el.markResolved.textContent = done ? 'Unmark resolved' : 'Mark resolved';

  const index = state.filtered.findIndex((item) => item.id === q.id);
  el.prevQuestion.disabled = index <= 0;
  el.nextQuestion.disabled = index >= state.filtered.length - 1;
}

function renderKeyPanel() {
  const variant = state.variant === 'all' ? currentQuestion()?.variant || 1 : state.variant;
  el.keyCaption.textContent = `Variant ${variant} quick key (Part A letters + Part B finals)`;

  const variantItems = state.dataset
    .filter((q) => q.variant === variant)
    .sort((a, b) => {
      if (a.part !== b.part) return a.part.localeCompare(b.part);
      return a.question_no - b.question_no;
    });

  el.keyGrid.innerHTML = variantItems
    .map((q) => {
      const label = `${q.part === 'Part A' ? 'A' : 'B'}${q.question_no}`;
      const answer = typeof q.final_answer === 'string' ? q.final_answer : String(q.final_answer ?? '');
      const value = q.type === 'MCQ' ? answer : answer.slice(0, 36) + (answer.length > 36 ? '...' : '');
      return `<div class="key-item"><span>${label}</span><br /><strong>${escapeHtml(value)}</strong></div>`;
    })
    .join('');
}

function jumpNextUnresolved() {
  if (!state.filtered.length) return;
  const idx = state.filtered.findIndex((q) => q.id === state.currentId);
  const ordered = [...state.filtered.slice(idx + 1), ...state.filtered.slice(0, idx + 1)];
  const next = ordered.find((q) => !state.resolved.has(q.id));
  if (next) {
    state.currentId = next.id;
    renderAll();
  }
}

function moveQuestion(direction) {
  if (!state.filtered.length) return;
  const idx = state.filtered.findIndex((q) => q.id === state.currentId);
  if (idx < 0) return;
  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= state.filtered.length) return;
  state.currentId = state.filtered[targetIdx].id;
  renderAll();
}

function escapeHtml(text) {
  return String(text ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
