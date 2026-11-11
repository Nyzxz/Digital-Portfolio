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
    "I'm a third-year Information Technology student at STI College San Jose Del Monte with a passion for creating things that live on the internet. My journey into programming started in Senior High School when I was introduced to Java programming.",
    "My goal is to become a skilled web developer who can build complete, user-friendly applications from the ground up. I'm particularly interested in web development and UI/UX design.",
  ],
  typedRoles: [
    'Aspiring Web Developer',
    'UI/UX Enthusiast',
    'Third-year IT Student',
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
  { name: 'HTML5', category: 'frontend', level: 85, icon: 'globe' },
  { name: 'CSS3', category: 'frontend', level: 80, icon: 'palette' },
  { name: 'JavaScript', category: 'frontend', level: 75, icon: 'zap' },
  { name: 'Python', category: 'backend', level: 80, icon: 'terminal' },
  { name: 'Java', category: 'backend', level: 70, icon: 'coffee' },
  { name: 'SQL', category: 'database', level: 72, icon: 'database' },
  { name: 'Git & GitHub', category: 'tools', level: 78, icon: 'git-branch' },
  { name: 'VS Code', category: 'tools', level: 90, icon: 'code' },
  { name: 'Figma', category: 'design', level: 60, icon: 'pen-tool' },
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
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'web',
    description:
      'A responsive portfolio website that showcases my projects and skills. Started as plain HTML, CSS and JavaScript, now rebuilt with React and TypeScript with animations, theming and a command palette.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    icon: 'rocket',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Nutrifit',
    category: 'design',
    description:
      'A complete UI/UX design for a nutrition and fitness web application. Designed user flows, high-fidelity mockups, and interactive prototypes in Figma.',
    technologies: ['Figma', 'Prototyping', 'UI Design'],
    icon: 'leaf',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'DriveZoneRental',
    category: 'design',
    description:
      'A car rental web application UI design created in Figma. Features a clean booking interface, vehicle browsing, and user dashboard with modern aesthetics.',
    technologies: ['Figma', 'UI Design', 'Web Design'],
    icon: 'car',
    github: '#',
    live: '#',
    featured: false,
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
  { label: 'Cups of Coffee', value: 1000, suffix: '+' },
];
