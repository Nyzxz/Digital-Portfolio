export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'design';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  icon: string;
}

export type ProjectCategory = 'web' | 'design';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  icon: string;
  github: string;
  live: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  place: string;
  date: string;
  details: string[];
}

export interface SoftSkill {
  title: string;
  description: string;
  icon: string;
}

export interface LearningStage {
  year: string;
  title: string;
  points: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
