import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import type { Skill } from '../types';

export default function SkillBar({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const shown = useCountUp(skill.level, inView, 1200);

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-info">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{shown}%</span>
      </div>
      <div className="skill-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
        <div className="skill-progress" style={{ width: inView ? `${skill.level}%` : '0%' }} />
      </div>
    </div>
  );
}
