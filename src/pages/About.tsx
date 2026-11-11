import { categoryLabels, education, profile, skills, softSkills } from '../data/portfolio';
import type { SkillCategory } from '../types';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import SkillBar from '../components/SkillBar';

const categories = Object.keys(categoryLabels) as SkillCategory[];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1 className="gradient-text">About Me</h1>
        <p>Get to know the person behind the code</p>
      </section>

      <section className="section container about-grid">
        <Reveal className="profile-card">
          <div className="avatar">{profile.initials}</div>
          <h2>{profile.name}</h2>
          <p className="profile-role">{profile.shortRole}</p>
          <p className="profile-location">
            <Icon name="map-pin" size={16} /> {profile.location}
          </p>
          <div className="profile-social">
            <a className="social-btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="social-btn" href={profile.resume} download={profile.resumeFileName}>Resume</a>
          </div>
        </Reveal>

        <Reveal className="about-bio" delay={120}>
          <h2>My Story</h2>
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Journey" title="Education" />
        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={`${e.place}-${e.date}`} className="timeline-item" delay={i * 100}>
              <span className="timeline-marker" />
              <div className="timeline-content">
                <h3>{e.degree}</h3>
                <p className="timeline-place">{e.place}</p>
                <p className="timeline-date">{e.date}</p>
                {e.details.map((d) => (
                  <p key={d} className="timeline-desc">{d}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Tools and technologies I've worked with"
        />
        <div className="skills-container">
          {categories.map((cat) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <Reveal key={cat} className="skill-category">
                <h3 className="skill-category-title">{categoryLabels[cat]}</h3>
                <div className="skill-items">
                  {items.map((s) => (
                    <SkillBar key={s.name} skill={s} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Character" title="Soft Skills" />
        <div className="soft-skills-grid">
          {softSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="soft-skill-card">
                <div className="soft-skill-icon"><Icon name={s.icon} size={38} /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
