import type { ProjectVisual } from "../data/content";
import { MatrixDemo } from "./MatrixDemo";

const WAVE = Array.from({ length: 30 }, (_, index) => 24 + ((index * 37) % 68));

export function ProjectVisualBlock({ kind }: { kind: ProjectVisual }) {
  if (kind === "fog") {
    return (
      <div className="viz viz-fog" aria-hidden="true">
        <div className="viz-map">
          {Array.from({ length: 120 }, (_, index) => {
            const x = index % 15;
            const y = Math.floor(index / 15);
            const distance = Math.hypot(x - 7, y - 3.5);
            const open = distance < 3.4 || (index * 37) % 13 === 0;

            return <span key={index} className={open ? "viz-cell is-open" : "viz-cell"} />;
          })}
        </div>
        <span className="viz-badge">GPS · cell 70 m</span>
      </div>
    );
  }

  if (kind === "matrix") {
    return <MatrixDemo />;
  }

  if (kind === "player") {
    return (
      <div className="viz viz-player" aria-hidden="true">
        <div className="viz-wave">
          {WAVE.map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="viz-player-row">
          <span className="viz-play">▶</span>
          <span className="viz-track">track_04.mp3</span>
          <span className="viz-time">02:41</span>
        </div>
        <span className="viz-badge">Electron · Redux</span>
      </div>
    );
  }

  if (kind === "melody") {
    return (
      <div className="viz viz-melody" aria-hidden="true">
        <div className="viz-melody-list">
          {["Melody 01", "Melody 02", "Melody 03"].map((label, index) => (
            <span key={label} className={index === 1 ? "is-active" : ""}>
              {label}
              <em>{index === 1 ? "playing" : "—"}</em>
            </span>
          ))}
        </div>
        <span className="viz-badge">Next.js · Nest.js · ESP32</span>
      </div>
    );
  }

  return (
    <div className="viz viz-eyes" aria-hidden="true">
      <p className="viz-text">
        Bed sheet → <mark>**** *****</mark>
      </p>
      <code className="viz-regex">/\b(bed sheet)\b/gi</code>
      <span className="viz-badge">Chrome extension</span>
    </div>
  );
}
