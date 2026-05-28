const STORAGE_KEY = "statistics-theory-quiz-progress-v2";
const MODE_STORAGE_KEY = "statistics-theory-quiz-mode-v1";

const MASTER_ANSWER_KEY = {
  1: "E",
  2: "E",
  3: "D",
  4: "B",
  5: "D",
  6: "D",
  7: "D",
  8: "E",
  9: "E",
  10: "A",
};

const MODE_LABELS = {
  theory: "Theory cards",
  sample_final_exam: "Sample Final Exams",
  mcq_part_a: "MCQ Part A",
  variants_10: "Probability & Statistics: 10 Variants",
};

const MCQ_PART_A_CARDS = [
  {
    id: 1,
    title: "Outlier definition",
    question:
      "An outlier is an observation that\n\nA. is seen more frequently than the other observations in the data set\nB. is seen less frequently than the other observations in the data set\nC. is always smaller than the other observations in the data set\nD. is always larger than the other observations in the data set\nE. is significantly different from the other observations in the data set",
    answer: "Correct option: E",
    formula: "Outlier = unusually far from most data points",
    example: "A single very extreme value in an otherwise compact sample.",
    memory: "Outlier means atypical magnitude, not just rare category frequency.",
  },
  {
    id: 2,
    title: "95th percentile capacity",
    question:
      "How many flu shots should the center store every day to meet demand on 95% of days?\n\nA. At most 190\nB. At most 140\nC. Exactly 170\nD. At least 150\nE. At least 200",
    answer: "Correct option: E",
    formula: "Target capacity = 95th percentile demand",
    example: "If the 95th percentile is 200, stock at least 200.",
    memory: "To satisfy demand on 95% of days, choose a level at or above the 95th percentile.",
  },
  {
    id: 3,
    title: "Weighted mean of two groups",
    question:
      "Company mean salary from two offices: NJ mean $28,500 (n=128), Utah mean $22,500 (n=32).\n\nA. $22,500\nB. $23,700\nC. $25,500\nD. $27,300\nE. $28,500",
    answer: "Correct option: D",
    formula: "x̄ = (n1*x̄1 + n2*x̄2)/(n1+n2)",
    example: "(128*28500 + 32*22500)/160 = 27,300.",
    memory: "Never average subgroup means directly unless subgroup sizes are equal.",
  },
  {
    id: 4,
    title: "Robust center for skewed data",
    question:
      "Skewed distribution with an extreme outlier: best center measure?\n\nA. Mean\nB. Median\nC. IQR\nD. First quartile\nE. Standard deviation",
    answer: "Correct option: B",
    formula: "Median is robust to skewness and outliers",
    example: "Right-skewed absence counts are better summarized by median than mean.",
    memory: "Use median for center when outliers distort the mean.",
  },
  {
    id: 5,
    title: "Total probability",
    question:
      "Dry day accident chance 0.2%, wet day 1.0%, wet-day probability 20%. Total chance today?\n\nA. 0.0004\nB. 0.0016\nC. 0.0020\nD. 0.0036\nE. 0.0060",
    answer: "Correct option: D",
    formula: "P(A)=P(A|dry)P(dry)+P(A|wet)P(wet)",
    example: "0.002*0.8 + 0.01*0.2 = 0.0036.",
    memory: "Split by conditions, multiply by condition probabilities, then add.",
  },
  {
    id: 6,
    title: "Expected retained workers",
    question:
      "Agency data: 20% leave after year 1, then 5% of remaining leave in year 2. Hire 100 at start Y1 and 100 at start Y2. Expected employed at end Y2?\n\nA. 140\nB. 144\nC. 152\nD. 156\nE. 171",
    answer: "Correct option: D",
    formula: "Cohort1: 100*0.8*0.95, Cohort2: 100*0.8",
    example: "76 + 80 = 156.",
    memory: "Track cohorts separately over time, then sum survivors.",
  },
  {
    id: 7,
    title: "Normal tail probability",
    question:
      "X ~ N(210, 10^2). Find P(X > 225).\n\nA. 66.8%\nB. 47.7%\nC. 43.3%\nD. 6.68%\nE. 3.34%",
    answer: "Correct option: D",
    formula: "z = (225-210)/10 = 1.5",
    example: "P(Z>1.5)=0.0668.",
    memory: "Standardize first, then read tail from normal table.",
  },
  {
    id: 8,
    title: "Combined standard deviation",
    question:
      "Independent components: product SD=2, box SD=0.15, packing SD=0.25. Total packed-box SD?\n\nA. 28.000 pounds\nB. 5.290 pounds\nC. 4.085 pounds\nD. 2.400 pounds\nE. 2.021 pounds",
    answer: "Correct option: E",
    formula: "Var(total)=sum of variances for independent parts",
    example: "sqrt(2^2 + 0.15^2 + 0.25^2) = 2.021.",
    memory: "For independent sums, add variances, not SDs.",
  },
  {
    id: 9,
    title: "CI interpretation",
    question:
      "95% CI for mean family income is ($35,095, $45,005). Best interpretation?\n\nA. 95% of students have family income inside this interval\nB. 95% probability all student families are in this interval\nC. Another same-size sample gives exactly same interval with 95% chance\nD. 95% chance another sample mean is in this interval\nE. In repeated sampling, 95% of such intervals capture the true mean",
    answer: "Correct option: E",
    formula: "Frequentist CI coverage interpretation",
    example: "Long-run method performance, not probability on fixed parameter after observing data.",
    memory: "The confidence level is about the interval procedure, not this one fixed interval.",
  },
  {
    id: 10,
    title: "Type I error",
    question:
      "Park closes if lead exceeds allowed limit. Which outcome is Type I error?\n\nA. Closing when lead is within allowed limit\nB. Keeping open when lead exceeds allowed limit\nC. Closing when lead exceeds allowed limit\nD. Keeping open when lead is within allowed limit\nE. Closing because of neighborhood noise",
    answer: "Correct option: A",
    formula: "Type I = reject true H0 (false positive)",
    example: "H0: park is safe. Type I means declaring unsafe when actually safe.",
    memory: "Type I is false alarm.",
  },
].map((card) => ({ ...card, section: "MCQ Part A", displayId: `Q${card.id}` }));

const state = {
  mode: loadMode(),
  cardSets: {
    theory: [],
    sample_final_exam: [],
    mcq_part_a: MCQ_PART_A_CARDS,
    variants_10: [],
  },
  allCards: [],
  filteredCards: [],
  currentIndex: 0,
  revealed: false,
  section: "all",
  search: "",
  shuffle: false,
  reviewOnly: false,
  marks: loadMarks(),
  modeNotes: {
    theory: "Loading theory deck...",
    sample_final_exam: "Loading sample final exams deck...",
    mcq_part_a: "Source: embedded from `MCQ Part A.pdf`.",
    variants_10: "Loading variants deck...",
  },
};

const elements = {
  loadedCount: document.getElementById("loaded-count"),
  reviewedCount: document.getElementById("reviewed-count"),
  needReviewCount: document.getElementById("need-review-count"),
  modeFilter: document.getElementById("mode-filter"),
  searchInput: document.getElementById("search-input"),
  sectionFilter: document.getElementById("section-filter"),
  shuffleToggle: document.getElementById("shuffle-toggle"),
  reviewOnlyToggle: document.getElementById("review-only-toggle"),
  randomCardButton: document.getElementById("random-card-button"),
  resetProgressButton: document.getElementById("reset-progress-button"),
  positionIndicator: document.getElementById("position-indicator"),
  progressBar: document.getElementById("progress-bar"),
  sourceNote: document.getElementById("source-note"),
  cardSection: document.getElementById("card-section"),
  cardTitle: document.getElementById("card-title"),
  cardNumber: document.getElementById("card-number"),
  cardQuestion: document.getElementById("card-question"),
  answerVeil: document.getElementById("answer-veil"),
  revealButton: document.getElementById("reveal-button"),
  answerPanel: document.getElementById("answer-panel"),
  cardAnswer: document.getElementById("card-answer"),
  cardFormula: document.getElementById("card-formula"),
  cardExample: document.getElementById("card-example"),
  cardMemory: document.getElementById("card-memory"),
  markReviewButton: document.getElementById("mark-review-button"),
  markKnownButton: document.getElementById("mark-known-button"),
  prevButton: document.getElementById("prev-button"),
  nextButton: document.getElementById("next-button"),
  topicList: document.getElementById("topic-list"),
};

boot();

async function boot() {
  bindEvents();
  elements.modeFilter.value = state.mode;

  const [theoryResult, sampleFinalExamResult, variantsResult] = await Promise.all([
    loadTheoryCards(),
    loadSampleFinalExamCards(),
    loadVariantCards(),
  ]);
  state.cardSets.theory = theoryResult.cards;
  state.modeNotes.theory = theoryResult.note;
  state.cardSets.sample_final_exam = sampleFinalExamResult.cards;
  state.modeNotes.sample_final_exam = sampleFinalExamResult.note;
  state.cardSets.variants_10 = variantsResult.cards;
  state.modeNotes.variants_10 = variantsResult.note;

  if (!state.cardSets[state.mode]?.length) {
    state.mode = state.cardSets.theory.length ? "theory" : "mcq_part_a";
    persistMode();
    elements.modeFilter.value = state.mode;
  }

  activateMode(state.mode);
}

function bindEvents() {
  elements.modeFilter.addEventListener("change", (event) => {
    const mode = event.target.value;
    if (!state.cardSets[mode]) {
      return;
    }
    state.mode = mode;
    persistMode();
    activateMode(mode);
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    applyFilters();
    render();
  });

  elements.sectionFilter.addEventListener("change", (event) => {
    state.section = event.target.value;
    applyFilters();
    render();
  });

  elements.shuffleToggle.addEventListener("change", (event) => {
    state.shuffle = event.target.checked;
    applyFilters();
    render();
  });

  elements.reviewOnlyToggle.addEventListener("change", (event) => {
    state.reviewOnly = event.target.checked;
    applyFilters();
    render();
  });

  elements.randomCardButton.addEventListener("click", () => {
    if (!state.filteredCards.length) {
      return;
    }
    state.currentIndex = Math.floor(Math.random() * state.filteredCards.length);
    state.revealed = false;
    render();
  });

  elements.resetProgressButton.addEventListener("click", () => {
    for (const card of state.allCards) {
      delete state.marks[getMarkKey(card)];
    }
    persistMarks();
    applyFilters(false);
    updateStats();
    render();
  });

  elements.revealButton.addEventListener("click", () => {
    state.revealed = true;
    renderAnswerState();
  });

  elements.prevButton.addEventListener("click", () => moveCard(-1));
  elements.nextButton.addEventListener("click", () => moveCard(1));
  elements.markReviewButton.addEventListener("click", () => markCurrent("review"));
  elements.markKnownButton.addEventListener("click", () => markCurrent("known"));

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
      return;
    }
    if (event.key === "ArrowRight") {
      moveCard(1);
    }
    if (event.key === "ArrowLeft") {
      moveCard(-1);
    }
    if (event.key.toLowerCase() === "r") {
      state.revealed = true;
      renderAnswerState();
    }
  });
}

function activateMode(mode) {
  state.allCards = [...(state.cardSets[mode] || [])];
  state.section = "all";
  state.search = "";
  state.currentIndex = 0;
  state.revealed = false;
  elements.searchInput.value = "";
  populateSectionFilter(state.allCards);
  applyFilters();
  updateStats();
  updateSourceNote();
  render();
}

async function loadTheoryCards() {
  try {
    const response = await fetch("statistics_theory_quiz.md", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const raw = await response.text();
    return {
      cards: parseTheoryMarkdown(raw),
      note: "<strong>Mode:</strong> Theory cards<br><strong>Source:</strong> live `statistics_theory_quiz.md`",
    };
  } catch (error) {
    if (typeof window.QUIZ_MARKDOWN === "string" && window.QUIZ_MARKDOWN.trim()) {
      return {
        cards: parseTheoryMarkdown(window.QUIZ_MARKDOWN),
        note: "<strong>Mode:</strong> Theory cards<br><strong>Source:</strong> embedded fallback from `quiz-data.js`",
      };
    }
    return {
      cards: [],
      note: "<strong>Mode:</strong> Theory cards<br><strong>Source:</strong> unavailable (failed to load markdown)",
    };
  }
}

async function loadVariantCards() {
  try {
    const response = await fetch("probability_and_statistics_10_variants.txt", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const raw = await response.text();
    return {
      cards: parseVariantsText(raw),
      note: "<strong>Mode:</strong> Probability & Statistics: 10 Variants<br><strong>Source:</strong> parsed from `Probability_and_Statistics_10_Variants.pdf`",
    };
  } catch (error) {
    return {
      cards: [],
      note: "<strong>Mode:</strong> Probability & Statistics: 10 Variants<br><strong>Source:</strong> unavailable (failed to load text export)",
    };
  }
}

async function loadSampleFinalExamCards() {
  try {
    const response = await fetch("sample_final_exam_quiz.md", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const raw = await response.text();
    return {
      cards: parseTheoryMarkdown(raw),
      note: "<strong>Mode:</strong> Sample Final Exams<br><strong>Source:</strong> live `sample_final_exam_quiz.md`",
    };
  } catch (error) {
    return {
      cards: [],
      note: "<strong>Mode:</strong> Sample Final Exams<br><strong>Source:</strong> unavailable (failed to load markdown)",
    };
  }
}

function parseTheoryMarkdown(raw) {
  const lines = raw.split(/\r?\n/);
  const cards = [];
  let currentSection = "Unsorted";
  let currentCard = null;
  let currentField = "";

  const fieldMap = {
    "**Question:**": "question",
    "**Short answer:**": "answer",
    "**Key formula / notation:**": "formula",
    "**Mini example:**": "example",
    "**What to remember:**": "memory",
  };

  const flushCard = () => {
    if (!currentCard) {
      return;
    }
    for (const key of ["question", "answer", "formula", "example", "memory"]) {
      currentCard[key] = (currentCard[key] || "").trim();
    }
    currentCard.searchBlob = [
      currentCard.section,
      currentCard.title,
      currentCard.question,
      currentCard.answer,
      currentCard.formula,
      currentCard.example,
      currentCard.memory,
    ]
      .join(" ")
      .toLowerCase();
    currentCard.displayId = `Card ${currentCard.id}`;
    cards.push(currentCard);
    currentCard = null;
    currentField = "";
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushCard();
      currentSection = line.replace(/^##\s+/, "").trim();
      continue;
    }

    const cardMatch = line.match(/^### Card\s+(\d+)\.\s+(.*)$/);
    if (cardMatch) {
      flushCard();
      currentCard = {
        id: Number(cardMatch[1]),
        title: cardMatch[2].trim(),
        section: currentSection,
      };
      continue;
    }

    if (!currentCard) {
      continue;
    }

    const fieldPrefix = Object.keys(fieldMap).find((prefix) => line.startsWith(prefix));
    if (fieldPrefix) {
      currentField = fieldMap[fieldPrefix];
      const value = line.slice(fieldPrefix.length).trim();
      currentCard[currentField] = value;
      continue;
    }

    if (!line.trim()) {
      if (currentField && currentCard[currentField]) {
        currentCard[currentField] += "\n\n";
      }
      continue;
    }

    if (currentField) {
      currentCard[currentField] = `${currentCard[currentField] || ""}${line.trim()} `;
    }
  }

  flushCard();
  return cards;
}

function parseVariantsText(raw) {
  const cleaned = raw
    .replaceAll("\f", "\n")
    .replace(/^\s*Probability & Statistics Exam Bank.*$/gm, "")
    .replace(/^\s*Page\s+\d+\s*$/gm, "");

  const cards = [];
  const variantChunks = cleaned.split(/Probability\s*&\s*Statistics\s*—\s*Variant\s+/).slice(1);

  for (const chunk of variantChunks) {
    const head = chunk.match(/^(\d+)\s*\n([\s\S]*)$/);
    if (!head) {
      continue;
    }

    const variant = Number(head[1]);
    const body = head[2];
    const questionBlocks = [...body.matchAll(/(?:^|\n)\s*([1-9]|10)\.\s([\s\S]*?)(?=(?:\n\s*(?:[1-9]|10)\.\s)|$)/g)];

    for (const entry of questionBlocks) {
      const questionNo = Number(entry[1]);
      const block = normalizeWhitespace(entry[2]);
      const options = parseMcqOptions(block);
      const stem = extractStem(block);
      const correctLetter = MASTER_ANSWER_KEY[questionNo] || "";
      const correctOption = options.find((option) => option.letter === correctLetter);

      cards.push({
        id: variant * 100 + questionNo,
        displayId: `V${variant}-Q${questionNo}`,
        section: `Variant ${variant}`,
        title: `Question ${questionNo}`,
        question: `${stem}\n\n${options.map((option) => `${option.letter}. ${option.text}`).join("\n")}`.trim(),
        answer: correctOption
          ? `Correct option: ${correctLetter} — ${correctOption.text}`
          : `Correct option: ${correctLetter}`,
        formula: `Variant ${variant}, MCQ ${questionNo}`,
        example: "Solve by eliminating wrong options before checking the key.",
        memory: "Read the condition carefully: many options test interpretation, not just arithmetic.",
      });
    }
  }

  return cards;
}

function parseMcqOptions(block) {
  const options = [];
  const regex = /(?:^|\n)\s*([A-E])\.\s([\s\S]*?)(?=(?:\n\s*[A-E]\.\s)|$)/g;
  for (const match of block.matchAll(regex)) {
    options.push({
      letter: match[1],
      text: normalizeWhitespace(match[2]),
    });
  }
  return options;
}

function extractStem(block) {
  const firstOption = block.search(/(?:^|\n)\s*A\.\s/);
  if (firstOption === -1) {
    return normalizeWhitespace(block);
  }
  return normalizeWhitespace(block.slice(0, firstOption));
}

function normalizeWhitespace(text) {
  return text.replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();
}

function populateSectionFilter(cards) {
  elements.sectionFilter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All sections";
  elements.sectionFilter.append(allOption);

  const sections = [...new Set(cards.map((card) => card.section))];
  for (const section of sections) {
    const option = document.createElement("option");
    option.value = section;
    option.textContent = section;
    elements.sectionFilter.append(option);
  }
  elements.sectionFilter.value = "all";
}

function applyFilters(resetIndex = true) {
  let cards = [...state.allCards];

  if (state.section !== "all") {
    cards = cards.filter((card) => card.section === state.section);
  }

  if (state.search) {
    cards = cards.filter((card) => card.searchBlob?.includes(state.search) || buildSearchBlob(card).includes(state.search));
  }

  if (state.reviewOnly) {
    cards = cards.filter((card) => getCardMark(card) === "review");
  }

  if (state.shuffle) {
    cards = shuffle([...cards]);
  }

  state.filteredCards = cards;
  if (resetIndex) {
    state.currentIndex = 0;
  } else {
    state.currentIndex = Math.min(state.currentIndex, Math.max(cards.length - 1, 0));
  }
  state.revealed = false;
}

function buildSearchBlob(card) {
  return [card.section, card.title, card.question, card.answer, card.formula, card.example, card.memory]
    .join(" ")
    .toLowerCase();
}

function updateSourceNote() {
  const note = state.modeNotes[state.mode] || "Source unavailable.";
  elements.sourceNote.innerHTML = note;
}

function render() {
  updateStats();
  renderTopicList();

  const card = state.filteredCards[state.currentIndex];
  if (!card) {
    renderEmptyState();
    return;
  }

  elements.cardSection.textContent = card.section;
  elements.cardTitle.textContent = card.title;
  elements.cardNumber.textContent = card.displayId || `Card ${card.id}`;
  elements.cardQuestion.innerHTML = formatRichText(card.question);
  elements.cardAnswer.innerHTML = formatRichText(card.answer);
  elements.cardFormula.innerHTML = formatRichText(card.formula || "No special formula on this card.");
  elements.cardExample.innerHTML = formatRichText(card.example || "No mini example on this card.");
  elements.cardMemory.innerHTML = formatRichText(card.memory || "No memory cue on this card.");
  elements.positionIndicator.textContent = `${state.currentIndex + 1} / ${state.filteredCards.length}`;
  elements.progressBar.style.width = `${state.filteredCards.length ? ((state.currentIndex + 1) / state.filteredCards.length) * 100 : 0}%`;
  updateMarkButtons(card);
  renderAnswerState();
  toggleMainControls(false);
}

function renderAnswerState() {
  elements.answerVeil.classList.toggle("is-hidden", state.revealed);
  elements.answerPanel.classList.toggle("hidden", !state.revealed);
}

function renderTopicList() {
  elements.topicList.innerHTML = "";

  if (!state.filteredCards.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No cards match the current filters.";
    elements.topicList.append(empty);
    return;
  }

  for (const [index, card] of state.filteredCards.entries()) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-pill";
    if (index === state.currentIndex) {
      button.classList.add("active");
    }
    if (getCardMark(card) === "review") {
      button.classList.add("needs-review");
    }
    button.innerHTML = `
      <small>${escapeHtml(card.section)}</small>
      <strong>${escapeHtml(card.displayId || `Card ${card.id}`)}. ${escapeHtml(card.title)}</strong>
      ${renderStatusChip(card)}
    `;
    button.addEventListener("click", () => {
      state.currentIndex = index;
      state.revealed = false;
      render();
    });
    elements.topicList.append(button);
  }
}

function renderEmptyState() {
  elements.cardSection.textContent = "No results";
  elements.cardTitle.textContent = "Adjust filters to continue";
  elements.cardNumber.textContent = "Card 0";
  elements.cardQuestion.textContent = "No cards match the current selection.";
  elements.cardAnswer.innerHTML = "";
  elements.cardFormula.innerHTML = "";
  elements.cardExample.innerHTML = "";
  elements.cardMemory.innerHTML = "";
  elements.positionIndicator.textContent = "0 / 0";
  elements.progressBar.style.width = "0%";
  elements.answerVeil.classList.remove("is-hidden");
  elements.answerPanel.classList.add("hidden");
  toggleMainControls(true);
}

function toggleMainControls(disabled) {
  for (const control of [
    elements.revealButton,
    elements.markReviewButton,
    elements.markKnownButton,
    elements.prevButton,
    elements.nextButton,
  ]) {
    control.disabled = disabled;
  }
}

function moveCard(direction) {
  if (!state.filteredCards.length) {
    return;
  }
  const size = state.filteredCards.length;
  state.currentIndex = (state.currentIndex + direction + size) % size;
  state.revealed = false;
  render();
}

function markCurrent(mark) {
  const card = state.filteredCards[state.currentIndex];
  if (!card) {
    return;
  }
  const key = getMarkKey(card);
  state.marks[key] = state.marks[key] === mark ? "" : mark;
  if (!state.marks[key]) {
    delete state.marks[key];
  }
  persistMarks();
  if (state.reviewOnly) {
    applyFilters(false);
  }
  updateStats();
  render();
}

function updateStats() {
  const total = state.allCards.length;
  const reviewed = state.allCards.filter((card) => getCardMark(card) === "known").length;
  const needReview = state.allCards.filter((card) => getCardMark(card) === "review").length;
  elements.loadedCount.textContent = String(total);
  elements.reviewedCount.textContent = String(reviewed);
  elements.needReviewCount.textContent = String(needReview);
}

function updateMarkButtons(card) {
  const mark = getCardMark(card);
  elements.markReviewButton.setAttribute("aria-pressed", String(mark === "review"));
  elements.markKnownButton.setAttribute("aria-pressed", String(mark === "known"));
  elements.markReviewButton.textContent = mark === "review" ? "Marked for review" : "Need review";
  elements.markKnownButton.textContent = mark === "known" ? "Marked known" : "Know it";
}

function renderStatusChip(card) {
  const mark = getCardMark(card);
  if (mark === "review") {
    return '<span class="status-chip review">Review</span>';
  }
  if (mark === "known") {
    return '<span class="status-chip known">Known</span>';
  }
  return "";
}

function getMarkKey(card) {
  return `${state.mode}::${card.id}`;
}

function getCardMark(card) {
  return state.marks[getMarkKey(card)] || "";
}

function loadMarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function persistMarks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.marks));
}

function loadMode() {
  const savedMode = localStorage.getItem(MODE_STORAGE_KEY);
  if (savedMode && Object.prototype.hasOwnProperty.call(MODE_LABELS, savedMode)) {
    return savedMode;
  }
  return "theory";
}

function persistMode() {
  localStorage.setItem(MODE_STORAGE_KEY, state.mode);
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function formatRichText(text) {
  const escaped = escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br />");
  return `<p>${escaped}</p>`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
