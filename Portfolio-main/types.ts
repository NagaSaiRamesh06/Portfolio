
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Core Concepts' | 'Tools';
}

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  features?: string[];
  challenges?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  duration?: string;
  link?: string;
}

export interface Achievement {
  title: string;
  metric: string;
  icon: string;
  description: string;
}
