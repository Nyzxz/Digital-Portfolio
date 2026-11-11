import { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasGithub = project.github !== '#';
  const hasLive = project.live !== '#';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-visual">
          <span className="project-icon">{project.icon}</span>
        </div>
        <div className="modal-body">
          <span className="project-category">{project.category.toUpperCase()}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          <div className="modal-actions">
            {hasLive && (
              <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {hasGithub && (
              <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {!hasLive && !hasGithub && <span className="muted-note">Links coming soon.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
