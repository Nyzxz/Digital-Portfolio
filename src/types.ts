export type IconName =
  | 'globe'
  | 'palette'
  | 'zap'
  | 'terminal'
  | 'coffee'
  | 'database'
  | 'git-branch'
  | 'code'
  | 'pen-tool'
  | 'users'
  | 'book-open'
  | 'message'
  | 'clock'
  | 'rocket'
  | 'leaf'
  | 'car'
  | 'sun'
  | 'moon'
  | 'map-pin';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'design';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: IconName;
}

export type ProjectCategory = 'web' | 'design';
export type ProjectStatus = 'Live' | 'In progress' | 'Completed';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  icon: IconName;
  github: string;
  live: string;
  featured: boolean;
  year?: string;
  status?: ProjectStatus;
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
  icon: IconName;
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
