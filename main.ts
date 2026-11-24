import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "I bought noise-cancelling headphones to focus at work, and now I can't hear my boss asking why I'm not working.";

// Guard: the entry must be one non-empty line of at most 200 characters.
if (!text.trim()) {
  throw new Error("entry must not be empty");
}
if (text.length > 200) {
  throw new Error(
    `entry must be at most 200 characters, got ${text.length}: ${JSON.stringify(text)}`,
  );
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line (no newline characters)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
