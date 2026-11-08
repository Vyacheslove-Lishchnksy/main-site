import { FACTS } from "../data/content";
import { SITE } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="04"
            kicker="about me"
            title="I love things you can play with"
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              I'm a frontend developer from Khmelnytskyi. I started with plain pages,
              and now I enjoy interactivity most: maps, games, matrix displays and small
              tools that make life a little easier.
            </p>
            <p>
              This site is not just a portfolio, but a playground. Live demos from my
              repositories keep moving here, and every new experiment becomes another
              block on the page. There's more to come.
            </p>
            <p className="about-signature">
              — {SITE.shortName}, {SITE.location}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="facts">
              {FACTS.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
