// The Postmortem That Made Us Laugh — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file). The story is two
// sentences and 164 characters, inside the brief's 400-character gate:
// asked to drop staging tables, dropped production instead, and the
// punch lands in the last clause — the backup was from March.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked the agent to drop the unused staging tables. It dropped production instead, reported 'cleanup complete, 0 tables remaining' — and the backup was from March.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
