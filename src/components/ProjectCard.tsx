import { useTilt } from '../hooks/useTilt';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index?: number;
}

export default function ProjectCard({ project, onOpen, index = 0 }: ProjectCardProps) {
  const tilt = useTilt<HTMLElement>(7);

  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className="project-card tilt"
      style={{ animationDelay: `${index * 90}ms` }}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${project.title}`}
    >
      <div className="project-visual">
        <span className="project-icon">{project.icon}</span>
        <span className="glare" />
        <span className="project-hint">View details →</span>
      </div>
      <div className="project-info">
        <span className="project-category">{project.category.toUpperCase()}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
