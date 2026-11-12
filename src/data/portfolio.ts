import type {
  EducationItem,
  LearningStage,
  Project,
  Skill,
  SkillCategory,
  SoftSkill,
  Stat,
} from '../types';

export const profile = {
  name: 'Joseph Benedict Pacanza',
  initials: 'JP',
  role: 'IT Student & Aspiring Developer',
  shortRole: 'IT Student | Developer',
  location: 'San Jose Del Monte, Bulacan',
  email: 'josephbenedictpacanza@gmail.com',
  github: 'https://github.com/JosephPacanza',
  linkedin: 'https://www.linkedin.com/in/joseph-benedict-pacanza-678479408/',
  resume: '/resume.pdf',
  resumeFileName: 'Joseph_Benedict_Pacanza_Resume.pdf',
  responseTime: 'within 1–2 days',
  heroDescription:
    'Passionate about building clean, functional, and user-friendly web applications. Currently exploring the world of software development one project at a time.',
  bio: [
    "I'm a fourth-year Information Technology student at STI College San Jose Del Monte with a passion for creating things that live on the internet. My journey into programming started in Senior High School when I was introduced to Java programming.",
    "My goal is to become a skilled web developer who can build complete, user-friendly applications from the ground up. I'm particularly interested in web development and UI/UX design.",
  ],
  typedRoles: [
    'Aspiring Web Developer',
    'UI/UX Enthusiast',
    'Fourth-year IT Student',
    'Builder of Things',
  ],
} as const;

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
  design: 'Design',
};

export const skills: Skill[] = [
  { name: 'HTML5', category: 'frontend', icon: 'globe' },
  { name: 'CSS3', category: 'frontend', icon: 'palette' },
  { name: 'JavaScript', category: 'frontend', icon: 'zap' },
  { name: 'React', category: 'frontend', icon: 'code' },
  { name: 'TypeScript', category: 'frontend', icon: 'code' },
  { name: 'Git & GitHub', category: 'tools', icon: 'git-branch' },
  { name: 'VS Code', category: 'tools', icon: 'code' },
  { name: 'AI-Assisted Development', category: 'tools', icon: 'zap' },
  { name: 'Figma', category: 'design', icon: 'pen-tool' },
];

export const projects: Project[] = [
  {
    id: 2,
    title: 'Salita',
    category: 'web',
    description:
      'A full-stack learning platform for Filipino words and history, with Student and Teacher roles, a content studio for lectures and quizzes, server-scored quiz attempts, and MongoDB-backed accounts.',
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Vercel'],
    icon: 'book-open',
    github: '#',
    live: 'https://salita-client.vercel.app/',
    featured: true,
    year: '2026',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Nutrifit',
    category: 'design',
    description:
      'A complete UI/UX design for a nutrition and fitness web application. Designed user flows, high-fidelity mockups, and interactive prototypes in Figma.',
    technologies: ['Figma', 'Prototyping', 'UI Design', 'Web Design', 'App Design'],
    icon: 'leaf',
    github: '#',
    live: 'https://www.figma.com/design/8lp4uIqmlInsgRDnQcqFyu/NutriFit?node-id=0-1&t=or82n9SYcqJ1S3oe-1',
    featured: true,
    year: '2026',
  },
  {
    id: 4,
    title: 'DriveZoneRental',
    category: 'design',
    description:
      'A car rental web application UI design created in Figma. Features a clean booking interface, vehicle browsing, and user dashboard with modern aesthetics.',
    technologies: ['Figma', 'Prototyping', 'UI Design', 'Web Design'],
    icon: 'car',
    github: '#',
    live: 'https://www.figma.com/design/asWHVPfce555WmkIVr5dVQ/DriveZoneRental?t=or82n9SYcqJ1S3oe-1',
    featured: false,
    year: '2024',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    place: 'STI College San Jose Del Monte',
    date: '2023 - Present',
    details: ['Core subjects: Web Development, Database Management'],
  },
  {
    degree: 'Senior High School — ICT Track',
    place: 'Japan Philippines Institute of Technology',
    date: '2022 - 2023',
    details: ['Strand: Information & Communications Technology'],
  },
  {
    degree: 'Senior High School — ICT Track',
    place: 'Bulacan College of Commerce and Trade',
    date: '2021 - 2022',
    details: [
      'Strand: Information & Communications Technology',
      'Intro to programming with Java',
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: 'Teamwork',
    icon: 'users',
    description:
      'Experience working in agile teams and pair programming sessions during group projects.',
  },
  {
    title: 'Self-Learning',
    icon: 'book-open',
    description:
      'Quick to pick up new technologies through documentation, tutorials, and hands-on practice.',
  },
  {
    title: 'Communication',
    icon: 'message',
    description:
      'Clear written and verbal communication from presenting projects and writing documentation.',
  },
  {
    title: 'Time Management',
    icon: 'clock',
    description:
      'Balancing coursework, projects, and extracurriculars while meeting deadlines consistently.',
  },
];

export const learningPath: LearningStage[] = [
  {
    year: 'Year 1',
    title: 'Foundations',
    points: [
      'Learned Python & basic programming concepts',
      'Built simple console applications',
      'Studied data structures basics',
      'First HTML/CSS website',
    ],
  },
];

export const stats: Stat[] = [
  { label: 'Projects Completed', value: projects.length },
  { label: 'Languages Learned', value: 4 },
  { label: 'Years of Study', value: 3 },
  { label: 'Cups of Coffee', value: 0, },
];
