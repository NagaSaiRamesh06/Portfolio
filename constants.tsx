
import React from 'react';
import { NavItem, Skill, Project, Experience, Education, Certification, Achievement } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
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
    demo: 'https://github.com/NagaSaiRamesh06/JobCheck',
    image: '/jobcheckfrontpage.png',
    features: [
      'Real-time text analysis using state-of-the-art NLP pipelines.',
      'FastAPI backend achieving under 50ms latency for predictive classification.',
      'Interactive React-based recruitment fraud monitoring dashboard.',
      'Custom web scraping tools for automated dataset collection and update.'
    ],
    challenges: 'Faced significant data imbalance (fake postings represented <5% of raw data). Resolved this by implementing SMOTE (Synthetic Over-sampling) along with balanced class weights in Scikit-learn, bringing model recall up to 92.5%.'
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
    demo: 'https://careervibe-frontend.onrender.com',
    image: '/careerVibeai.png',
    features: [
      'Gemini LLM-integrated resume scoring and detailed ATS improvement feedback.',
      'Interactive voice/text mock interview rooms mimicking real interview environments.',
      'Dynamic resume generator and template matching tailored to job descriptions.',
      'Comprehensive performance analytics history using LocalStorage and custom graphs.'
    ],
    challenges: 'Handling real-time state synchronization and voice stream feedback on low-bandwidth networks. Overcame this by building a robust debounced React hook and caching response chunks, which improved user perceived performance by 40%.'
  },
  {
    title: 'TypeMaster AI',
    description: [
      'Developed a typing evaluation system with intelligent feedback and certificate generation.',
      'Implemented responsive UI using React and TypeScript with Vite build optimization.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas API'],
    github: 'https://github.com/NagaSaiRamesh06/TypeMaster',
    demo: 'https://typing-speed-evaluation-system-with.vercel.app/',
    image: '/Typingmaster.png',
    features: [
      'High-precision WPM (words per minute) and key accuracy tracking.',
      'Beautiful automated custom certificate generation dynamically rendered using HTML5 Canvas API.',
      'Interactive dashboards depicting speed progression over historical tests.',
      'Fluid typing field with colorized visual indicators matching typing accuracy.'
    ],
    challenges: 'Achieving consistent key timing measurements across various layout configs. Solved by binding directly to keyup/keydown events at the document level using high-resolution performance timers.'
  },
  {
    title: 'Smart Tourist Weather',
    description: [
      'Designed a real-time weather forecasting application using JavaScript and Weather APIs.',
      'Provided live climate data to support travel planning and decision-making.'
    ],
    tech: ['JavaScript', 'Weather API', 'HTML/CSS'],
    github: 'https://github.com/NagaSaiRamesh06/WeatherApp',
    demo: 'https://live-weather-app-drab.vercel.app/',
    image: '/live weather.png',
    features: [
      'Detailed real-time local weather reports using geolocation browser services.',
      'Multi-day forecasts detailing wind, pressure, humidity, and UV indicators.',
      'Dynamic UI background graphics adapting automatically to matching weather states.',
      'Fast city lookup autocomplete with smart query caching.'
    ],
    challenges: 'Preserving weather API limits while avoiding repeat query latency. Solved by building a lightweight custom caching solution utilizing session-bound localStorage.'
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
    score: 'CGPA: 7.87',
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

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Python Full Stack Intern',
    metric: 'Infosys Springboard',
    icon: 'Briefcase',
    description: 'Spearheaded AI research and developed NLP classification systems to prevent recruitment scams.'
  },
  {
    title: 'AI/ML Engineering Intern',
    metric: 'SmartBridge',
    icon: 'Award',
    description: 'Completed 240+ hours of advanced machine learning pipelines, regression models, and data extraction.'
  },
  {
    title: 'Tech Content Creator',
    metric: '15K+ Subscribers',
    icon: 'Youtube',
    description: 'Built a programming and computer education YouTube community sharing coding lectures and insights.'
  },
  {
    title: 'Educational Influencer',
    metric: '13K+ Followers',
    icon: 'Instagram',
    description: 'Create technical content, study guides, and industry news infographics for aspiring software engineers.'
  },
  {
    title: 'IIT NPTEL Elite Scholar',
    metric: 'Elite Grade',
    icon: 'Cpu',
    description: 'Earned Elite status certification in Industry 4.0 & Industrial Internet of Things (IoT) from IIT Kharagpur.'
  }
];

