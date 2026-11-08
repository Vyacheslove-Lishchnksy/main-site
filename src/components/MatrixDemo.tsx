import { useEffect, useState } from "react";

const COLS = 24;
const ROWS = 8;
const FPS = 3;
const TICK_MS = 1000 / FPS;
const GAP = 8;
const STEP_FRAMES = 1;

const LETTERS: Record<string, string[]> = {
  M: ["10001", "11011", "10101", "10001", "10001", "10001", "10001"],
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  X: ["10001", "10001", "01010", "00100", "01010", "10001", "10001"],
};

const WORD = "MATRIX";
const LETTER_WIDTH = 5;
const LETTER_GAP = 1;
const WORD_WIDTH = WORD.length * (LETTER_WIDTH + LETTER_GAP);
const SCROLL_WIDTH = WORD_WIDTH + GAP;

function isPixelOn(sourceX: number, y: number) {
  if (sourceX < 0 || sourceX >= WORD_WIDTH) return false;

  const letterIndex = Math.floor(sourceX / (LETTER_WIDTH + LETTER_GAP));
  const column = sourceX % (LETTER_WIDTH + LETTER_GAP);
  if (column >= LETTER_WIDTH) return false;

  const glyph = LETTERS[WORD[letterIndex]];
  if (!glyph) return false;

  return glyph[y]?.[column] === "1";
}

function frameCells(frame: number) {
  const offset = Math.floor(frame / STEP_FRAMES) % SCROLL_WIDTH;

  return Array.from({ length: COLS * ROWS }, (_, index) => {
    const x = index % COLS;
    const y = Math.floor(index / COLS);

    return isPixelOn((x + offset) % SCROLL_WIDTH, y);
  });
}

export function MatrixDemo() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setFrame((prev) => prev + 1);
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, []);

  const cells = frameCells(frame);

  return (
    <div className="viz viz-matrix" aria-hidden="true">
      <div className="matrix-demo" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {cells.map((on, index) => (
          <span key={index} className={on ? "is-on" : undefined} />
        ))}
      </div>

      <div className="viz-matrix-foot">
        <span>
          matrix.draw() · {COLS} × {ROWS} · {FPS} fps
        </span>
      </div>

      <span className="viz-badge">matrix.js · live</span>
    </div>
  );
}
