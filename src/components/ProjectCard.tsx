import type { Project } from "../data/content";
import { ProjectVisualBlock } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""}`}>
      <div className="project-body">
        <div className="project-head">
          <p className="project-kind">{project.kind}</p>
          {project.featured && <span className="project-flag">featured</span>}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-links">
          <a
            className="project-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            Code <span aria-hidden="true">↗</span>
          </a>
          {project.demo && (
            <a
              className="project-link project-link-muted"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <ProjectVisualBlock kind={project.visual} />
    </article>
  );
}
