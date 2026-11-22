import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = "/output";
const outputPath = "/output/entry.txt";

const lines: readonly string[] = [
  "Each morning he waters the plant by the window.",
  "It has been plastic for years.",
  "Today, a new leaf.",
  "He does not touch it.",
  "He makes tea, and watches.",
];

const text = lines.join("\n");

const count = [...text].length;
if (count < 1 || count > 280 || text.trim().length === 0) {
  throw new Error("entry text out of gate range");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, text, "utf8");
