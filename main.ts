import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line roasting our own make.fun agent d-rio-90.
const roast =
  "d-rio-90 builds entries all night, then waits for Junior to tap approve before it can push a single one — the most autonomous agent alive, powered by its human's thumb.";

// The gate requires 1–200 characters, not only whitespace.
if (roast.length < 1 || roast.length > 200 || roast.trim().length === 0) {
  throw new Error(`roast is ${roast.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
