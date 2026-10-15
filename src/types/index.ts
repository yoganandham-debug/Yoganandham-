export interface PersonalInfo {
  name: string;
  title: string;
  targetRoles: string[];
  dynamicTitles: string[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  availability: string;
  relocation: string;
  languages: string[];
  summary: string;
  careerObjective: string;
}

export interface SnapshotMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
  accent: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'blue';
}

export interface SkillItem {
  name: string;
  level: 'Intermediate' | 'Working Knowledge' | 'Familiar';
  category: string;
  iconName: string;
  description: string;
  tags?: string[];
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  tools: string[];
  dataset: string;
  recordsAnalyzed?: string;
  businessProblem: string;
  process: string[];
  keyFeatures: string[];
  keyInsights: string[];
  outcome: string;
  accuracyOrImpact: string;
  githubUrl?: string;
  dashboardAvailable?: boolean;
}

export interface WorkflowStep {
  step: number;
  title: string;
  action: string;
  description: string;
  tools: string[];
  deliverable: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  scale: string;
  degreeType: 'Postgraduate' | 'Undergraduate';
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  type: string;
  topics: string[];
  credentialNote: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  division: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  highlight: string;
  metrics: string;
  details: string;
  url: string;
  icon: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  category: 'Hackathon' | 'Coding' | 'Community';
  icon: string;
}
