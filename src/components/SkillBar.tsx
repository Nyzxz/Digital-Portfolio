import type { Skill } from '../types';
import Icon from './Icon';

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-icon"><Icon name={skill.icon} size={20} /></span>
        <span className="skill-name">{skill.name}</span>
      </div>
    </div>
  );
}
