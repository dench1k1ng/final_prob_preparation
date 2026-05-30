# Statistics Final Exam Prep

Static study site + printable handbook for all 10 variants from `Statistics_Final_Exam.docx 1.pdf`.

## What is included

- Interactive web app with:
  - Variant selector (`V1`-`V10`)
  - Part/type filters (`Part A`/`Part B`, `MCQ`/`FR`)
  - Question navigator with progress state
  - Reveal controls: show answer, show full derivation, hide all solutions
  - Compact mode and full mode
  - Next unresolved shortcut
  - Answer key panel
- Canonical dataset (`data/exam-dataset.json` and `data/exam-dataset.js`) containing all 240 solved items.
- Printable handbook markdown: `final_exam_solutions_ru_en.md`.

## Data model

Each item has:

- `id`, `variant`, `part`, `type`, `question_no`, `prompt`
- `solution_ru_steps[]`
- `solution_en_explanation`
- `final_answer`
- `tags[]`

## Build / regenerate

1. Extracted source text is stored in `full_exam_text.txt`.
2. Regenerate dataset + handbook:

```bash
node tools/generate_exam_assets.js
```

## Validation

Run:

```bash
node tests/validate-dataset.js
node tests/ui-state-check.js
```

## Open the app

Open `index.html` in a browser.
