import { PROJECTS } from "../data/content";
import { SITE } from "../data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            kicker="selected work"
            title="Projects worth playing with"
            note="From a map game to my own framework. Every project is open source."
            action={{ label: "All repositories", href: SITE.github }}
          />
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 70} className={project.featured ? "project-slot is-featured" : "project-slot"}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
