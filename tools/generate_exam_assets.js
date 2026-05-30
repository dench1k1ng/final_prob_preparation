const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(ROOT, 'full_exam_text.txt');
const OUT_DATA = path.join(ROOT, 'data', 'exam-dataset.js');
const OUT_JSON = path.join(ROOT, 'data', 'exam-dataset.json');
const OUT_MD = path.join(ROOT, 'final_exam_solutions_ru_en.md');

function cleanText(s) {
  return s
    .replace(/\f/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function splitVariants(raw) {
  const re = /(?:^|\f)\s*Name:\s*[^\n]*Score:\s*[^\n]*\n/gm;
  const idx = [];
  for (const m of raw.matchAll(re)) idx.push(m.index);
  const chunks = [];
  for (let i = 0; i < idx.length; i += 1) {
    const start = idx[i];
    const end = i + 1 < idx.length ? idx[i + 1] : raw.length;
    chunks.push(raw.slice(start, end));
  }
  return chunks;
}

function parsePartA(partAText) {
  const questions = [];
  const qRe = /\n\s*(\d{1,2})\.\s+/g;
  const markers = [];
  for (const m of partAText.matchAll(qRe)) markers.push({ n: Number(m[1]), i: m.index });
  for (let i = 0; i < markers.length; i += 1) {
    const start = markers[i].i;
    const end = i + 1 < markers.length ? markers[i + 1].i : partAText.length;
    const block = cleanText(partAText.slice(start, end));
    const qno = markers[i].n;
    const lines = block.split(/\n/).map((l) => l.trim()).filter(Boolean);
    const stem = [];
    const options = [];
    let current = null;
    for (const line of lines) {
      const qStart = line.match(/^\d{1,2}\.\s*(.*)$/);
      if (qStart) {
        if (qStart[1]) stem.push(qStart[1]);
        continue;
      }
      const opt = line.match(/^○\s*([A-E])\.\s*(.*)$/);
      if (opt) {
        if (current) options.push(current);
        current = { label: opt[1], text: opt[2].trim() };
      } else if (current) {
        current.text += ` ${line}`;
      } else {
        stem.push(line);
      }
    }
    if (current) options.push(current);
    const prompt = `${stem.join(' ')}\n\n${options
      .map((o) => `${o.label}. ${o.text}`)
      .join('\n')}`;
    questions.push({ question_no: qno, prompt, options });
  }
  return questions;
}

function parsePartB(partBText) {
  const questions = [];
  const qRe = /\n\s*Question\s+(\d)\s*\n/g;
  const markers = [];
  for (const m of partBText.matchAll(qRe)) markers.push({ n: Number(m[1]), i: m.index });
  for (let i = 0; i < markers.length; i += 1) {
    const start = markers[i].i;
    const end = i + 1 < markers.length ? markers[i + 1].i : partBText.length;
    let block = partBText.slice(start, end);
    block = block.replace(/_{10,}/g, '');
    block = block.replace(/^\s*Question\s+\d\s*\n/, '');
    block = cleanText(block);
    questions.push({ question_no: markers[i].n, prompt: block });
  }
  return questions;
}

function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  const ax = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * ax);
  const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-ax * ax);
  return sign * y;
}

function phi(z) {
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

function tail(z) {
  return 1 - phi(z);
}

function round(v, d = 4) {
  return Number(v.toFixed(d));
}

const MCQ_KEYS = {
  1: ['B', 'B', 'D', 'E', 'C', 'A', 'A', 'A', 'A', 'C', 'A', 'C', 'C', 'A', 'E', 'D', 'C', 'D', 'B', 'E'],
  2: ['D', 'A', 'D', 'D', 'B', 'C', 'A', 'A', 'D', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'D'],
  3: ['B', 'C', 'C', 'B', 'A', 'A', 'A', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'E', 'A', 'B', 'C', 'B', 'C'],
  4: ['C', 'C', 'C', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'D', 'E', 'B', 'B', 'C', 'A', 'C', 'B', 'C', 'D'],
  5: ['B', 'C', 'C', 'D', 'D', 'A', 'A', 'A', 'E', 'A', 'C', 'B', 'B', 'B', 'C', 'A', 'C', 'D', 'A', 'B'],
  6: ['C', 'B', 'C', 'C', 'A', 'A', 'C', 'C', 'B', 'D', 'B', 'B', 'A', 'B', 'C', 'C', 'C', 'A', 'B', 'B'],
  7: ['B', 'C', 'D', 'C', 'C', 'A', 'E', 'D', 'D', 'C', 'C', 'B', 'C', 'A', 'C', 'C', 'D', 'A', 'B', 'B'],
  8: ['B', 'C', 'C', 'C', 'C', 'B', 'A', 'C', 'B', 'B', 'C', 'B', 'C', 'B', 'B', 'A', 'B', 'B', 'B', 'C'],
  9: ['B', 'C', 'C', 'B', 'A', 'A', 'A', 'B', 'B', 'C', 'B', 'B', 'C', 'B', 'C', 'A', 'B', 'B', 'A', 'B'],
  10: ['B', 'C', 'D', 'C', 'C', 'A', 'B', 'C', 'D', 'D', 'C', 'B', 'C', 'D', 'C', 'D', 'C', 'D', 'A', 'B'],
};

const TAGS_BY_Q = {
  1: ['inference', 'test-selection'],
  2: ['descriptive-stats', 'skewness'],
  3: ['sampling-methods'],
  4: ['distributions', 'normal-t'],
  5: ['probability-rules'],
  6: ['normal-distribution', 'z-score'],
  7: ['confidence-interval', 'sample-size'],
  8: ['correlation'],
  9: ['chi-square'],
  10: ['expected-value'],
  11: ['experimental-design'],
  12: ['regression', 'residuals'],
  13: ['shape', 'clt'],
  14: ['hypothesis-testing'],
  15: ['bias'],
  16: ['independence', 'probability-rules'],
  17: ['confidence-interval'],
  18: ['conditions', 'inference'],
  19: ['expected-value'],
  20: ['power'],
};

const FR_CFG = {
  1: {
    q1: { cost: 3, payouts: [10, 4, 0], probs: [0.5, 0.3, 0.2], perspective: 'player', target: 20, nTotal: 500, meanTotal: 350, sdTotal: Math.sqrt(500) * 4.12, thr: 400 },
    q2: { mode: 'one', x: 510, n: 850, p0: 0.55, alpha: 0.05, alt: 'two' },
    q3: { sigma: 4.2, z: 1.96, E: 1.5 },
    q4: { mu: 2.5, sigma: 0.3, n: 16, m: 100, a: 2.4, b: 2.6, c: 2.35 },
  },
  2: {
    q1: { cost: 4, payouts: [8, 3, 0], probs: [0.4, 0.4, 0.2], perspective: 'player', target: 30, nTotal: 400, meanTotal: 80, sdTotal: 200, thr: 120 },
    q2: { mode: 'two', x1: 480, n1: 800, x2: 420, n2: 700, alpha: 0.05, alt: 'two' },
    q3: { sigma: 6.5, z: 2.576, E: 2 },
    q4: { mu: 72, sigma: 9, n: 20, m: 80, a: 70, b: 74, c: 75, above: true },
  },
  3: {
    q1: { cost: 2, payouts: [5, 1, 0], probs: [0.25, 0.375, 0.375], perspective: 'player', target: 25, nTotal: 600, meanTotal: 180, sdTotal: 300, thr: 250 },
    q2: { mode: 'two', x1: 390, n1: 600, x2: 310, n2: 550, alpha: 0.05, alt: 'two' },
    q3: { sigma: 220, z: 1.96, E: 50 },
    q4: { mu: 0.45, sigma: 0.08, n: 30, m: 150, a: 0.43, b: 0.47, c: 0.48, above: true },
  },
  4: {
    q1: { cost: 8, payouts: [20, 5, 0], probs: [3 / 12, 4 / 12, 5 / 12], perspective: 'player', target: 15, nTotal: 800, meanTotal: 400, sdTotal: 480, thr: 500 },
    q2: { mode: 'two', x1: 530, n1: 1000, x2: 480, n2: 900, alpha: 0.05, alt: 'two' },
    q3: { sigma: 1.5, z: 1.645, E: 0.4 },
    q4: { mu: 120, sigma: 25, n: 50, m: 200, a: 115, b: 125, c: 113, above: false },
  },
  5: {
    q1: { cost: 5, payouts: [15, 2, 0], probs: [0.15, 0.3, 0.55], perspective: 'charity', target: 500, nTotal: 1000, meanTotal: 2650, sdTotal: 500, thr: 2500 },
    q2: { mode: 'two', x1: 620, n1: 1100, x2: 560, n2: 1000, alpha: 0.05, alt: 'two' },
    q3: { sigma: 15, z: 2.576, E: 4 },
    q4: { mu: 350, sigma: 60, n: 36, m: 250, a: 340, b: 360, c: 365, above: true },
  },
  6: {
    q1: { cost: 6, payouts: [50, 10, 0], probs: [0.05, 0.2, 0.75], perspective: 'charity', target: 200, nTotal: 700, meanTotal: 700, sdTotal: 350, thr: 800 },
    q2: { mode: 'two', x1: 450, n1: 750, x2: 380, n2: 700, alpha: 0.05, alt: 'greater' },
    q3: { sigma: 28, z: 1.96, E: 8 },
    q4: { mu: 10, sigma: 0.3, n: 40, m: 120, a: 9.9, b: 10.1, c: 9.85, above: false },
  },
  7: {
    q1: { cost: 4, payouts: [10, 2, 0], probs: [0.3, 0.5, 0.2], perspective: 'charity', target: 100, nTotal: 300, meanTotal: 90, sdTotal: 150, thr: 60 },
    q2: { mode: 'two', x1: 280, n1: 400, x2: 330, n2: 500, alpha: 0.05, alt: 'two' },
    q3: { sigma: 1.2, z: 1.96, E: 0.3 },
    q4: { mu: 68, sigma: 4, n: 25, m: 180, a: 67, b: 69, c: 69.5, above: true },
  },
  8: {
    q1: { cost: 3, payouts: [10, 3, 0], probs: [1 / 6, 2 / 6, 3 / 6], perspective: 'charity', target: 80, nTotal: 500, meanTotal: 333, sdTotal: 250, thr: 400 },
    q2: { mode: 'two', x1: 550, n1: 900, x2: 420, n2: 700, alpha: 0.05, alt: 'two' },
    q3: { sigma: 2800, z: 2.326, E: 600 },
    q4: { mu: 38, sigma: 7, n: 49, m: 90, a: 37, b: 39, c: 36.5, above: false },
  },
  9: {
    q1: { cost: 3, payouts: [6, 3, 1, 0], probs: [0.1, 0.25, 0.3, 0.35], perspective: 'charity', target: 250, nTotal: 600, meanTotal: 900, sdTotal: 450, thr: 800 },
    q2: { mode: 'two', x1: 360, n1: 600, x2: 310, n2: 550, alpha: 0.05, alt: 'greater' },
    q3: { sigma: 12, z: 1.96, E: 3 },
    q4: { mu: 200, sigma: 20, n: 64, m: 160, a: 197.5, b: 202.5, c: 203, above: true },
  },
  10: {
    q1: { cost: 3, payouts: [6, 1, 0], probs: [0.2, 0.35, 0.45], perspective: 'charity', target: 300, nTotal: 800, meanTotal: 1240, sdTotal: 600, thr: 1400 },
    q2: { mode: 'two', x1: 400, n1: 650, x2: 350, n2: 600, alpha: 0.05, alt: 'two' },
    q3: { sigma: 3.5, z: 2.576, E: 1 },
    q4: { mu: 52000, sigma: 9000, n: 36, m: 120, a: 50500, b: 53500, c: 49000, above: false },
  },
};

function fr1Solution(cfg) {
  const outcomes = cfg.payouts.map((p) => (cfg.perspective === 'player' ? p - cfg.cost : cfg.cost - p));
  const ex = outcomes.reduce((s, x, i) => s + x * cfg.probs[i], 0);
  const minPlays = Math.ceil(cfg.target / ex);
  const z = (cfg.thr - cfg.meanTotal) / cfg.sdTotal;
  const p = tail(z);

  const ru = [
    `Определим чистый результат за игру: ${cfg.perspective === 'player' ? 'выигрыш игрока = выплата - стоимость' : 'выигрыш организатора = стоимость - выплата'}.`,
    ...outcomes.map((x, i) => `Исход ${i + 1}: X=${round(x, 3)}, P=${round(cfg.probs[i], 4)}.`),
    `Матожидание: E(X)=Σ x·p = ${round(ex, 4)}.`,
    `Для ожидаемого суммарного результата не менее ${cfg.target}: n·E(X) >= ${cfg.target}, значит n >= ${round(cfg.target / ex, 4)} -> минимально n=${minPlays}.`,
    `Для части (d): z = (${cfg.thr}-${cfg.meanTotal})/${round(cfg.sdTotal, 4)} = ${round(z, 4)}.`,
    `P(T >= ${cfg.thr}) = P(Z >= ${round(z, 4)}) = ${round(p, 4)}.`
  ];

  const en = `Build the net-gain distribution first, then compute E(X). Use n*E(X) for the minimum plays threshold. In part (d), standardize the total gain with z=(T-mu)/sigma and read the upper-tail normal probability.`;

  const dist = outcomes.map((x, i) => `${round(x, 3)} (p=${round(cfg.probs[i], 4)})`).join(', ');
  const final = `Distribution: ${dist}; E(X)=${round(ex, 4)}; min plays=${minPlays}; P(total >= ${cfg.thr})≈${round(p, 4)}`;

  return { ru, en, final, tags: ['expected-value', 'random-variable', 'clt'] };
}

function fr2Solution(cfg) {
  let z;
  let p;
  let final;
  let ru = [];

  if (cfg.mode === 'one') {
    const phat = cfg.x / cfg.n;
    const se = Math.sqrt((cfg.p0 * (1 - cfg.p0)) / cfg.n);
    z = (phat - cfg.p0) / se;
    p = cfg.alt === 'two' ? 2 * tail(Math.abs(z)) : tail(z);
    final = `z=${round(z, 4)}, p-value=${round(p, 4)} => ${p < cfg.alpha ? 'Reject H0' : 'Fail to reject H0'}`;
    ru = [
      `Гипотезы: H0: p=${cfg.p0}, Ha: p ${cfg.alt === 'two' ? '!= ' : '> '}${cfg.p0}.`,
      `p̂ = ${cfg.x}/${cfg.n} = ${round(phat, 4)}.`,
      `SE0 = sqrt(p0(1-p0)/n) = ${round(se, 5)}.`,
      `z = (p̂-p0)/SE0 = ${round(z, 4)}.`,
      `${cfg.alt === 'two' ? 'Двустороннее' : 'Правостороннее'} p-value = ${round(p, 4)}.`,
      `${p < cfg.alpha ? `Так как p-value < ${cfg.alpha}, отвергаем H0.` : `Так как p-value >= ${cfg.alpha}, не отвергаем H0.`}`,
    ];
  } else {
    const p1 = cfg.x1 / cfg.n1;
    const p2 = cfg.x2 / cfg.n2;
    const pPool = (cfg.x1 + cfg.x2) / (cfg.n1 + cfg.n2);
    const se = Math.sqrt(pPool * (1 - pPool) * (1 / cfg.n1 + 1 / cfg.n2));
    z = (p1 - p2) / se;
    p = cfg.alt === 'two' ? 2 * tail(Math.abs(z)) : tail(z);
    final = `p1=${round(p1, 4)}, p2=${round(p2, 4)}, z=${round(z, 4)}, p-value=${round(p, 4)} => ${p < cfg.alpha ? 'Reject H0' : 'Fail to reject H0'}`;
    ru = [
      `Гипотезы: H0: p1=p2, Ha: p1 ${cfg.alt === 'two' ? '!= ' : '> '}p2.`,
      `p1̂=${cfg.x1}/${cfg.n1}=${round(p1, 4)}, p2̂=${cfg.x2}/${cfg.n2}=${round(p2, 4)}.`,
      `Объединённая оценка p̂=${round(pPool, 4)}.`,
      `SE = sqrt(p̂(1-p̂)(1/n1+1/n2)) = ${round(se, 5)}.`,
      `z = (p1̂-p2̂)/SE = ${round(z, 4)}.`,
      `${cfg.alt === 'two' ? 'Двустороннее' : 'Правостороннее'} p-value = ${round(p, 4)}; ${p < cfg.alpha ? 'отвергаем H0.' : 'не отвергаем H0.'}`,
    ];
  }

  const en = `Set null and alternative hypotheses for proportion(s), compute the z statistic using the null-based standard error, then compare the p-value to alpha=0.05.`;
  return { ru, en, final, tags: ['hypothesis-test', 'proportion', 'z-test'] };
}

function fr3Solution(cfg) {
  const nRaw = (cfg.z * cfg.sigma / cfg.E) ** 2;
  const n = Math.ceil(nRaw);
  const ru = [
    `Используем формулу для известной σ: n=(z*σ/E)^2.`,
    `Подставляем: n=(${cfg.z}*${cfg.sigma}/${cfg.E})^2=${round(nRaw, 4)}.`,
    `Округляем вверх: n=${n}.`,
  ];
  const en = `For a margin-of-error requirement with known sigma, use n=(z*sigma/E)^2 and round up.`;
  return { ru, en, final: `Required minimum sample size: n=${n}`, tags: ['confidence-interval', 'sample-size'] };
}

function fr4Solution(cfg) {
  const muX = cfg.mu;
  const sdX = cfg.sigma / Math.sqrt(cfg.n);
  const z1 = (cfg.a - muX) / sdX;
  const z2 = (cfg.b - muX) / sdX;
  const pBetween = phi(z2) - phi(z1);
  const countBetween = cfg.m * pBetween;

  const zc = (cfg.c - muX) / sdX;
  const pTail = cfg.above ? tail(zc) : phi(zc);
  const countTail = cfg.m * pTail;

  const ru = [
    `Параметры распределения выборочного среднего: μx̄=μ=${round(muX, 4)}, σx̄=σ/√n=${round(sdX, 5)}.`,
    `Для интервала [${cfg.a}, ${cfg.b}]: z1=${round(z1, 4)}, z2=${round(z2, 4)}.`,
    `P(${cfg.a}<=x̄<=${cfg.b})=${round(pBetween, 4)} => ожидаемое число = ${round(countBetween, 2)} (~${Math.round(countBetween)}).`,
    `Для порога ${cfg.c}: z=${round(zc, 4)}, вероятность=${round(pTail, 4)} => ожидаемое число=${round(countTail, 2)} (~${Math.round(countTail)}).`,
  ];
  const en = `Use the sampling distribution of x-bar: mean mu and SD sigma/sqrt(n). Convert bounds to z-scores, compute normal probabilities, then multiply by the number of repeated samples.`;
  const final = `mu_xbar=${round(muX, 4)}, sd_xbar=${round(sdX, 5)}; between count≈${round(countBetween, 2)}; ${cfg.above ? 'above' : 'below'} ${cfg.c} count≈${round(countTail, 2)}`;
  return { ru, en, final, tags: ['sampling-distribution', 'normal-approximation'] };
}

const MCQ_EN_EXPLANATIONS = {
  1: (option) => `This compares means from two independent groups (athletes vs non-athletes), so use a two-sample procedure. Population standard deviations are not given and sample sizes are small, so a two-sample t-test is appropriate (not z, and not paired). That matches option ${option}.`,
  2: (option) => `Most scores are around 70-80 with a tail toward lower values, so the distribution is left-skewed. In left skew, the mean is pulled downward below the median. Therefore the statement "median > mean" is the best choice, which is option ${option}.`,
  3: (option) => `Selecting every 10th employee is the definition of systematic sampling: pick units at a fixed interval after an initial start. It is not simple random, cluster, or stratified sampling. Hence option ${option} is correct.`,
  4: (option) => `A standard normal distribution is continuous, symmetric, centered at 0, with standard deviation 1, and total area under the curve equal to 1. The only false statement is "area is 2," so the NOT-true option is ${option}.`,
  5: (option) => `Use conditional probability: P(Science | Math) = P(Science and Math) / P(Math). Substituting gives 0.42 / 0.70 = 0.60. The option expressing this setup is ${option}.`,
  6: (option) => `Standardize with z = (186 - 170) / 8 = 2. Then P(X > 186) = P(Z > 2) ≈ 0.0228 from the standard normal table. This corresponds to option ${option}.`,
  7: (option) => `For a 95% margin requirement on a difference of two means with equal SDs, the margin form is z*sqrt(s1^2+s2^2)/sqrt(n). Set 1.96*sqrt(10^2+10^2)/sqrt(n) <= 3 and solve for n. That exact setup is option ${option}.`,
  8: (option) => `Correlation near +1 means a strong positive linear association, while correlation near 0 means weak linear association. Correlation does not establish causation. The option consistent with these facts is ${option}.`,
  9: (option) => `A chi-square test compares observed category counts to expected counts under a null model. The statistic sums (O-E)^2/E across categories and is right-tailed. The choice that describes this correctly is option ${option}.`,
  10: (option) => `Expected value is the probability-weighted average: E(X)=sum x*p(x). You multiply each outcome by its probability and add, rather than averaging outcomes equally. The correct statement is option ${option}.`,
  11: (option) => `A well-designed experiment uses random assignment to treatment groups to balance confounders and support causal conclusions. Random sampling affects generalizability, not internal treatment comparison alone. The best answer is option ${option}.`,
  12: (option) => `Residual = observed y - predicted y-hat. Positive residuals mean underprediction by the model, negative residuals mean overprediction. The option matching this interpretation is ${option}.`,
  13: (option) => `By the central limit theorem, the sampling distribution of the sample mean becomes approximately normal for sufficiently large n (under standard conditions), even if the population is non-normal. The correct choice is option ${option}.`,
  14: (option) => `In hypothesis testing, compare the p-value with alpha (or compare the test statistic with a critical threshold). Reject H0 only when evidence is strong enough under the null model. The option expressing this rule is ${option}.`,
  15: (option) => `Bias is a systematic deviation caused by design or measurement issues, not random sampling fluctuation. Increasing sample size reduces random error but does not fix biased collection. Therefore option ${option} is correct.`,
  16: (option) => `Independence means P(A and B)=P(A)P(B), equivalently P(A|B)=P(A) when P(B)>0. If this product rule fails, events are dependent. The option stating this criterion is ${option}.`,
  17: (option) => `A confidence interval gives a plausible range for the population parameter based on sample data and method reliability. In repeated sampling, a 95% method captures the true parameter about 95% of the time. The correct interpretation here is option ${option}.`,
  18: (option) => `Before inference, check conditions such as randomness/independence and distribution or large-sample requirements for the chosen method. If assumptions fail badly, usual formulas may be invalid. The best option is ${option}.`,
  19: (option) => `For repeated independent trials, expected total equals number of trials times expected single-trial outcome: E(total)=n*E(X). This linearity rule is fundamental and does not require normality. The option reflecting this is ${option}.`,
  20: (option) => `Statistical power is P(reject H0 | H1 true): the chance a test detects a real effect. Power increases with larger effects, larger n, lower variability, and a more permissive alpha. The option defining this correctly is ${option}.`,
};

function mcqSolution(option, qno) {
  const explain = MCQ_EN_EXPLANATIONS[qno];
  if (!explain) throw new Error(`Missing MCQ explanation template for q${qno}`);

  const ru = [
    `Определяем ключевую тему задания (например: ${TAGS_BY_Q[qno][0]}).`,
    `Применяем соответствующее правило/формулу и отбрасываем некорректные варианты.`,
    `Итоговый выбор: ${option}.`,
  ];
  const en = explain(option);
  return { ru, en };
}

function parseAll() {
  const raw = fs.readFileSync(INPUT, 'utf8');
  const chunks = splitVariants(raw);
  if (chunks.length !== 10) throw new Error(`Expected 10 variants, got ${chunks.length}`);

  const items = [];

  chunks.forEach((chunk, idx) => {
    const variant = idx + 1;
    const partAStart = chunk.indexOf('Part A — Multiple Choice');
    const partBStart = chunk.indexOf('Part B — Free Response');
    if (partAStart < 0 || partBStart < 0) throw new Error(`Part markers not found for variant ${variant}`);

    const partAText = chunk.slice(partAStart, partBStart);
    const partBText = chunk.slice(partBStart);

    const mcq = parsePartA(partAText);
    const fr = parsePartB(partBText);

    if (mcq.length !== 20) throw new Error(`Variant ${variant}: expected 20 MCQ, got ${mcq.length}`);
    if (fr.length !== 4) throw new Error(`Variant ${variant}: expected 4 FR, got ${fr.length}`);

    mcq.forEach((q) => {
      const ans = MCQ_KEYS[variant][q.question_no - 1];
      if (!ans) throw new Error(`Missing MCQ key v${variant} q${q.question_no}`);
      const sol = mcqSolution(ans, q.question_no);
      items.push({
        id: `V${variant}-A-Q${q.question_no}`,
        variant,
        part: 'Part A',
        type: 'MCQ',
        question_no: q.question_no,
        prompt: q.prompt,
        solution_ru_steps: sol.ru,
        solution_en_explanation: sol.en,
        final_answer: ans,
        tags: TAGS_BY_Q[q.question_no],
      });
    });

    fr.forEach((q) => {
      const cfg = FR_CFG[variant][`q${q.question_no}`];
      let sol;
      if (q.question_no === 1) sol = fr1Solution(cfg);
      if (q.question_no === 2) sol = fr2Solution(cfg);
      if (q.question_no === 3) sol = fr3Solution(cfg);
      if (q.question_no === 4) sol = fr4Solution(cfg);
      items.push({
        id: `V${variant}-B-Q${q.question_no}`,
        variant,
        part: 'Part B',
        type: 'FR',
        question_no: q.question_no,
        prompt: q.prompt,
        solution_ru_steps: sol.ru,
        solution_en_explanation: sol.en,
        final_answer: sol.final,
        tags: sol.tags,
      });
    });
  });

  return items;
}

function buildMarkdown(items) {
  const lines = [];
  lines.push('# Statistics Final Exam: Full Solved Handbook (RU + EN)');
  lines.push('');
  lines.push('Generated from the canonical dataset used by the web app.');
  lines.push('');

  for (let v = 1; v <= 10; v += 1) {
    lines.push(`## Variant ${v}`);
    lines.push('');

    lines.push('### Part A — Multiple Choice');
    lines.push('');
    const mcq = items.filter((x) => x.variant === v && x.part === 'Part A').sort((a, b) => a.question_no - b.question_no);
    mcq.forEach((q) => {
      lines.push(`#### Q${q.question_no}`);
      lines.push('');
      lines.push(`**Prompt**: ${q.prompt.replace(/\n/g, '  \n')}`);
      lines.push('');
      lines.push('**RU: Вычисление**');
      q.solution_ru_steps.forEach((s) => lines.push(`- ${s}`));
      lines.push('');
      lines.push(`**EN: Explanation** ${q.solution_en_explanation}`);
      lines.push('');
      lines.push(`**Final answer**: ${q.final_answer}`);
      lines.push('');
    });

    lines.push('### Part B — Free Response');
    lines.push('');
    const fr = items.filter((x) => x.variant === v && x.part === 'Part B').sort((a, b) => a.question_no - b.question_no);
    fr.forEach((q) => {
      lines.push(`#### Q${q.question_no}`);
      lines.push('');
      lines.push(`**Prompt**: ${q.prompt.replace(/\n/g, '  \n')}`);
      lines.push('');
      lines.push('**RU: Вычисление**');
      q.solution_ru_steps.forEach((s) => lines.push(`- ${s}`));
      lines.push('');
      lines.push(`**EN: Explanation** ${q.solution_en_explanation}`);
      lines.push('');
      lines.push(`**Final answer**: ${q.final_answer}`);
      lines.push('');
    });
  }

  return lines.join('\n');
}

function validate(items) {
  const byVariant = new Map();
  for (const item of items) {
    if (!byVariant.has(item.variant)) byVariant.set(item.variant, []);
    byVariant.get(item.variant).push(item);
  }

  if (byVariant.size !== 10) throw new Error(`Expected 10 variants, got ${byVariant.size}`);

  for (let v = 1; v <= 10; v += 1) {
    const list = byVariant.get(v) || [];
    if (list.length !== 24) throw new Error(`Variant ${v} count mismatch: ${list.length}`);
    const mcq = list.filter((x) => x.type === 'MCQ');
    const fr = list.filter((x) => x.type === 'FR');
    if (mcq.length !== 20 || fr.length !== 4) throw new Error(`Variant ${v} type counts mismatch`);
  }

  if (items.length !== 240) throw new Error(`Total count mismatch: ${items.length}`);

  for (const item of items) {
    if (!item.solution_ru_steps?.length) throw new Error(`Missing RU steps in ${item.id}`);
    if (!item.solution_en_explanation) throw new Error(`Missing EN explanation in ${item.id}`);
    if (item.type === 'MCQ' && !/^[A-E]$/.test(item.final_answer)) throw new Error(`Bad MCQ final answer in ${item.id}`);
    if (item.type === 'FR' && (!item.final_answer || /^[A-E]$/.test(item.final_answer))) throw new Error(`Bad FR final answer in ${item.id}`);
  }
}

function main() {
  const items = parseAll();
  validate(items);

  fs.writeFileSync(OUT_JSON, JSON.stringify(items, null, 2));
  fs.writeFileSync(OUT_DATA, `window.EXAM_DATASET = ${JSON.stringify(items, null, 2)};\n`);
  fs.writeFileSync(OUT_MD, buildMarkdown(items));

  const byVariant = Array.from({ length: 10 }, (_, i) => i + 1).map((v) => ({
    variant: v,
    count: items.filter((x) => x.variant === v).length,
  }));

  console.log(JSON.stringify({
    variants: byVariant.length,
    perVariant: byVariant,
    total: items.length,
  }, null, 2));
}

main();
