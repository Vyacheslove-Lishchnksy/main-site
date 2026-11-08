import { HERO_FACTS, SITE } from "../data/site";
import { MatrixRain } from "./MatrixRain";

export function Hero() {
  return (
    <section id="top" className="hero">
      <MatrixRain className="hero-canvas" />
      <div className="hero-veil" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-top">
          <p className="hero-eyebrow">// {SITE.role}</p>
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            open to offers
          </span>
        </div>

        <h1 className="hero-title">
          Viacheslav
          <br />
          <span className="hero-title-accent">Lishchynskyi</span>
        </h1>

        <p className="hero-handle">
          <span>@{SITE.handle}</span>
          <span className="hero-handle-sep" aria-hidden="true">
            ·
          </span>
          <span>{SITE.location}</span>
        </p>

        <p className="hero-lede">
          TypeScript, React and a bit of magic: from a fog-of-war map to a framework for
          matrix displays. I build browser experiments — and publish them here.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn-ghost" href={SITE.github} target="_blank" rel="noreferrer">
            My GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="hero-meta">
          {HERO_FACTS.map((fact) => (
            <div className="hero-meta-item" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a className="scroll-cue" href="#projects">
        <span>scroll</span>
        <span className="visually-hidden">Go to projects</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
