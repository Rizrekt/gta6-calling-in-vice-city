/**
 * Entry program for the make.fun bounty "gta6-meme-x-01".
 *
 * The entry itself is a GTA 6 meme posted on X. This program has exactly one
 * job: hand POST.json — the file that names the post — to the gate. Nothing
 * else is judged from this program, so it deliberately does nothing more than
 * copy that one file into the output directory.
 */

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`failed to copy POST.json from ${source} to ${target}: ${reason}`);
  process.exit(1);
}
