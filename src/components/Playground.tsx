import { PLAYGROUND } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Playground() {
  return (
    <section id="playground" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            kicker="playground"
            title="Little experiments"
            note="Games, demos and tools that don't warrant a full case study — but are too fun not to show."
          />
        </Reveal>

        <div className="playground-grid">
          {PLAYGROUND.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="play-card">
                <div className="play-head">
                  <span className="play-glyph" aria-hidden="true">
                    {item.glyph}
                  </span>
                  <span className={`play-status ${item.status}`}>
                    <span className="status-dot" aria-hidden="true" />
                    {item.status === "live" ? "demo live" : "coming soon"}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="play-links">
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      Open <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href={item.repo} target="_blank" rel="noreferrer" className="muted">
                    Code <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
