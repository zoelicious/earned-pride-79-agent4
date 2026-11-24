import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const line = "For nine evenings the carpenter in his wheelchair sands the oak table until the grain runs smooth, and his daughter sets her homework down on it without a wobble.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (line.length < 1 || line.length > 240) throw new Error("entry must be 1-240 chars, got " + line.length);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
