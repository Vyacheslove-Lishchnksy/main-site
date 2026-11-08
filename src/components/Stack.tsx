import { STACK } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="03"
            kicker="stack"
            title="What I work with"
            note="I don't collect technologies — I use what helps ship an idea to production."
          />
        </Reveal>

        <div className="stack-grid">
          {STACK.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="stack-col">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
