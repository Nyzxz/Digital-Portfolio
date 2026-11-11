import { useTilt } from '../hooks/useTilt';
import type { Project } from '../types';
import Icon from './Icon';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index?: number;
}

export default function ProjectCard({ project, onOpen, index = 0 }: ProjectCardProps) {
  const tilt = useTilt<HTMLElement>(7);
  const hasLive = project.live !== '#';
  const hasGithub = project.github !== '#';

  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={() => onOpen(project)}
      className="project-card tilt"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="project-visual">
        <span className="project-icon">
          <Icon name={project.icon} size={60} />
        </span>
        <span className="glare" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{project.category.toUpperCase()}</span>
          {project.status && (
            <span className={`status-chip status-${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          )}
          {project.year && <span className="year-chip">{project.year}</span>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <button
            type="button"
            className="link-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
          >
            View details →
          </button>
          {hasLive && (
            <a
              className="link-btn"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live demo ↗
            </a>
          )}
          {hasGithub && (
            <a
              className="link-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
