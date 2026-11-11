import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { profile, projects, skills, stats } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import { useTilt } from '../hooks/useTilt';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import Icon from '../components/Icon';
import ContactCta from '../components/ContactCta';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import type { Stat } from '../types';

function CodeLine({ n, indent = 0, children }: { n: number; indent?: number; children?: ReactNode }) {
  return (
    <div className="code-line" style={{ paddingLeft: `${indent * 1.4}em` }}>
      <span className="ln">{n}</span>
      {children}
    </div>
  );
}

function CodeWindow() {
  const tilt = useTilt<HTMLDivElement>(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="code-window tilt"
    >
      <div className="code-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="filename">student.ts</span>
      </div>
      <div className="code-body">
        <CodeLine n={1}>
          <span className="c-kw">const</span> <span className="c-var">student</span> = {'{'}
        </CodeLine>
        <CodeLine n={2} indent={1}>
          <span className="c-prop">name</span>: <span className="c-str">&quot;{profile.name}&quot;</span>,
        </CodeLine>
        <CodeLine n={3} indent={1}>
          <span className="c-prop">major</span>: <span className="c-str">&quot;Information Technology&quot;</span>,
        </CodeLine>
        <CodeLine n={4} indent={1}>
          <span className="c-prop">year</span>: <span className="c-num">3</span>,
        </CodeLine>
        <CodeLine n={5} indent={1}>
          <span className="c-prop">passion</span>: <span className="c-str">&quot;Building things&quot;</span>,
        </CodeLine>
        <CodeLine n={6} indent={1}>
          <span className="c-prop">learning</span>: [<span className="c-str">&quot;Web Dev&quot;</span>,{' '}
          <span className="c-str">&quot;UI/UX Design&quot;</span>],
        </CodeLine>
        <CodeLine n={7} indent={1}>
          <span className="c-prop">coffee</span>: <span className="c-bool">true</span>
        </CodeLine>
        <CodeLine n={8}>{'};'}</CodeLine>
        <CodeLine n={9} />
        <CodeLine n={10}>
          <span className="c-com">{'// Currently building my future...'}</span>
        </CodeLine>
        <CodeLine n={11}>
          <span className="c-var">student</span>.<span className="c-fn">grow</span>();
          <span className="caret" />
        </CodeLine>
      </div>
      <span className="glare" />
    </div>
  );
}

function StatItem({ label, value, suffix = '' }: Stat) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number">
        <span aria-hidden="true">
          {n.toLocaleString()}
          {suffix}
        </span>
        {/* Screen readers, crawlers and reduced-motion users always get the real final value. */}
        <span className="sr-only">
          {value.toLocaleString()}
          {suffix}
        </span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const typed = useTypewriter(profile.typedRoles);
  const navigate = useNavigate();
  const featured = projects.filter((p) => p.featured);
  const marquee = [...skills, ...skills];

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-title gradient-text">{profile.name}</h1>
          <p className="hero-typed">
            {/* Visual-only animation; screen readers get the stable full text instead. */}
            <span className="sr-only">{profile.typedRoles.join(', ')}</span>
            <span aria-hidden="true">
              <span className="prompt">&gt;</span> <span>{typed}</span>
              <span className="caret" />
            </span>
          </p>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">View My Work</Link>
            <Link to="/about" className="btn btn-ghost">About Me</Link>
            <a
              href={profile.resume}
              className="btn btn-ghost"
              download={profile.resumeFileName}
            >
              Resume
            </a>
          </div>
          <p className="hero-tip">
            Tip: press <kbd>Ctrl</kbd> <kbd>K</kbd> to jump anywhere.
          </p>
        </div>
        <div className="hero-visual">
          <CodeWindow />
          <span className="chip chip-a" aria-hidden="true">React</span>
          <span className="chip chip-b" aria-hidden="true">TypeScript</span>
          <span className="chip chip-c" aria-hidden="true">Figma</span>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((s, i) => (
            <span key={`${s.name}-${i}`} className="marquee-item">
              <Icon name={s.icon} size={16} /> {s.name}
            </span>
          ))}
        </div>
      </div>

      <section className="section container">
        <SectionHeader
          eyebrow="Toolkit"
          title="What I Work With"
          subtitle="Technologies and tools I've been learning"
        />
        <div className="skills-grid">
          {skills.slice(0, 6).map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="skill-preview-item">
                <span className="skill-icon"><Icon name={s.icon} size={26} /></span>
                <span className="skill-name">{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Featured"
          title="Selected Work"
          subtitle="A few things I'm proud of"
        />
        <div className="projects-grid">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={(proj) => navigate('/portfolio', { state: { projectId: proj.id } })} />
          ))}
        </div>
      </section>

      <section className="section container">
        <ContactCta />
      </section>
    </>
  );
}
