
import React from 'react';
import { NavItem, Skill, Project, Experience, Education, Certification } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Java (Basic)', category: 'Languages' },
  { name: 'React.js', category: 'Web Technologies' },
  { name: 'Node.js', category: 'Web Technologies' },
  { name: 'HTML5', category: 'Web Technologies' },
  { name: 'CSS3', category: 'Web Technologies' },
  { name: 'Tailwind CSS', category: 'Web Technologies' },
  { name: 'TypeScript', category: 'Web Technologies' },
  { name: 'Data Structures', category: 'Core Concepts' },
  { name: 'OOP', category: 'Core Concepts' },
  { name: 'SDLC', category: 'Core Concepts' },
  { name: 'REST API Design', category: 'Core Concepts' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Vite', category: 'Tools' },
  { name: 'Google Gemini API', category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'JobCheck – Fake Job Detection',
    description: [
      'Engineered an NLP-based fraud detection system achieving 92% accuracy in identifying fake job postings.',
      'Optimized data pipeline with advanced preprocessing and feature extraction techniques using Scikit-learn.',
      'Deployed a responsive React frontend integrated with FastAPI endpoints for real-time prediction.'
    ],
    tech: ['Python', 'NLP', 'Scikit-learn', 'React', 'FastAPI'],
    github: 'https://github.com/NagaSaiRamesh06/JobCheck',
    demo: 'https://github.com/NagaSaiRamesh06/JobCheck', // Placeholder: using Repo as demo since no live URL provided
    image: '/jobcheckfrontpage.png'
  },
  {
    title: 'CareerVibe AI',
    description: [
      'Architected an AI-driven career prep platform leveraging Google Gemini API for personalized resume feedback.',
      'Built a scalable Node.js backend to handle concurrent mock interview sessions with <100ms latency.',
      'Enhanced frontend performance by 40% through Vite optimizations and lazy loading strategies.'
    ],
    tech: ['React', 'TypeScript', 'Gemini API', 'Node.js', 'Vite'],
    github: 'https://github.com/NagaSaiRamesh06/CareerVibe-AI',
    demo: 'https://ai-integrated-placement-preparation.vercel.app/',
    image: '/careerVibeai.png'
  },
  {
    title: 'TypeMaster AI',
    description: [
      'Developed a typing evaluation system with intelligent feedback and certificate generation.',
      'Implemented responsive UI using React and TypeScript with Vite build optimization.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas API'],
    github: 'https://github.com/NagaSaiRamesh06/TypeMaster',
    demo: 'https://typing-speed-evaluation-system-with.vercel.app/', // Placeholder
    image: '/Typingmaster.png'
  },
  {
    title: 'Smart Tourist Weather',
    description: [
      'Designed a real-time weather forecasting application using JavaScript and Weather APIs.',
      'Provided live climate data to support travel planning and decision-making.'
    ],
    tech: ['JavaScript', 'Weather API', 'HTML/CSS'],
    github: 'https://github.com/NagaSaiRamesh06/WeatherApp',
    demo: 'https://live-weather-app-drab.vercel.app/', // Placeholder
    image: '/live weather.png'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Infosys Springboard',
    period: 'Nov 2025 – Present',
    details: [
      'Spearheading the development of "JobCheck," a full-stack solution for detecting recruitment fraud using AI.',
      'Architecting RESTful APIs and integrating ML models to process real-time user data.',
      'Collaborating in an agile environment to deliver iterative features, using Git for version control.'
    ]
  },
  {
    role: 'Artificial Intelligence & Machine Learning Intern',
    company: 'SmartBridge',
    period: '2024',
    details: [
      'Completed a 240-hour internship in AI & ML with focus on data preprocessing and model building.',
      'Applied machine learning techniques to solve real-world analytical problems.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'JNTU Gurajada Vizianagaram',
    period: '2024 – Present',
    score: 'SGPA: 7.87',
    details: 'Expected Graduation: 2026'
  },
  {
    degree: 'B.Sc. Mathematics, Chemistry & Computer Science',
    institution: 'Andhra University',
    period: '2021 – 2024',
    score: 'CGPA: 8.27'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Srinivasa Junior College, Cheepurupalli',
    period: '2019 – 2021',
    score: 'CGPA: 8.6'
  },
  {
    degree: 'SSC (Class X)',
    institution: 'Zilla Parishad High School, Cheepurupalli',
    period: '2018 – 2019',
    score: 'CGPA: 8.7'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Python Foundation Certification', issuer: 'Infosys Springboard', link: 'https://drive.google.com/file/d/165ESOhV8YIjPfbpaDyuWr6U4cAT8g6ZA/view?usp=drive_link' },
  { name: 'Artificial Intelligence & Machine Learning', issuer: 'SmartBridge', duration: '240 Hours', link: 'https://drive.google.com/file/d/1lgQ5c_r27xCdpg5_hmyfRZssQknv7PQQ/view?usp=sharing' },
  { name: 'Elite Certification – Industry 4.0 & Industrial IoT', issuer: 'NPTEL (IIT Kharagpur)', link: 'https://drive.google.com/file/d/1Q7nldr4ZsRtCdbY1bMqM0iQMTvrQsKGS/view?usp=drive_link' },
  { name: 'Gen AI Hackathon', issuer: 'GenAiVersity', link: 'https://drive.google.com/file/d/1OpCj51Hu076klzS1od57HDRcgJ41PMv-/view?usp=drive_link' },
];
