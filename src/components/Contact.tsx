import { SITE } from "../data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <p className="section-kicker">
              <span>05</span> / contact
            </p>
            <h2>
              Got an idea?
              <br />
              Let's build it.
            </h2>
            <p className="contact-text">
              Open to interesting projects, collaboration and conversations about frontend.
              The fastest way is to message me on GitHub.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={SITE.github} target="_blank" rel="noreferrer">
                Message on GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="btn btn-ghost" href={`${SITE.github}?tab=repositories`} target="_blank" rel="noreferrer">
                All repositories <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="contact-meta">
              {SITE.location} · open to remote work and on-site in Ukraine
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
