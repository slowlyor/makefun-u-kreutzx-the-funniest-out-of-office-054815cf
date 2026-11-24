// The Funniest Out-of-Office — make.fun entry
//
// Writes a single line of an out-of-office auto-reply to /output/entry.txt.
// Deterministic, stdlib only, no network. Node 22+ runs this file as-is.
//
// The line has to be funny on its own: one line, 140 characters or fewer,
// a real auto-reply voice with a twist the reader does not see coming.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I'm out of office until my auto-reply stops crying. It has read my inbox. It knows what you've been sending me.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");
