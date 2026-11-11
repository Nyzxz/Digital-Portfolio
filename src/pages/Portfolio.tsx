import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { learningPath, projects } from '../data/portfolio';
import type { Project } from '../types';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

type Filter = 'all' | 'web' | 'design';

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'design', label: 'Design' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const location = useLocation();
  // Home's featured cards link here with the project id so its details modal opens directly.
  const [selected, setSelected] = useState<Project | null>(() => {
    const id = (location.state as { projectId?: number } | null)?.projectId;
    return projects.find((p) => p.id === id) ?? null;
  });
  const close = useCallback(() => setSelected(null), []);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="page-hero">
        <h1 className="gradient-text">My Projects</h1>
        <p>A collection of my work and learning journey</p>
      </section>

      <section className="container">
        <div className="filter-container" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" key={filter}>
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Growth"
          title="My Learning Path"
          subtitle="How I've grown as a developer"
        />
        <div className="journey-cards">
          {learningPath.map((stage) => (
            <Reveal key={stage.year}>
              <div className="journey-card">
                <div className="journey-year">{stage.year}</div>
                <h3>{stage.title}</h3>
                <ul>
                  {stage.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={close} />
    </>
  );
}
