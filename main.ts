// one-line-exit-1dc652d1: a one-line resignation letter. This program writes
// that single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The letter: a night-shift security guard resigns, and the punchline is
// that the only intruder he ever caught on camera was himself, asleep.
const LINE =
  'I hereby resign as night-shift security guard: after three years, the only intruder I ever caught on camera was me, asleep, in 4K.';

// Gate: 1-140 characters, exactly one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-140 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
