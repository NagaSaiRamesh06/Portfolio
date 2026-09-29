import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Mail, FileText, ArrowRight, Award, FolderGit2, Briefcase, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ['Full Stack Developer', 'Python Developer', 'AI Enthusiast', 'MCA Student'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = roles[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const stats = [
    { value: '4+', label: 'Projects', icon: FolderGit2, color: 'text-blue-400' },
    { value: '2', label: 'Internships', icon: Briefcase, color: 'text-purple-400' },
    { value: '4', label: 'Certifications', icon: Award, color: 'text-pink-400' },
    { value: 'MCA', label: 'Student', icon: GraduationCap, color: 'text-indigo-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-[#030712]">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Available for Opportunities</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight">
              <span className="block text-white mb-2 font-light">Hello, I am</span>
              <span className="block text-gradient">Naga Sai Ramesh K.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-10 text-xl sm:text-3xl font-mono text-gray-300 font-bold flex items-center">
              <span>{currentText}</span>
              <span className="inline-block w-1.5 h-6 bg-blue-500 ml-1.5 animate-pulse" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
              An MCA student specializing in <span className="text-white font-semibold">Python</span> and <span className="text-white font-semibold">Full Stack Web Development</span>. Experienced in building AI-integrated workflows, structuring efficient data structures, and developing intuitive, scalable user interfaces.
            </motion.p>

            {/* Social Icons Link Group */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { href: 'https://github.com/NagaSaiRamesh06', icon: Github, color: 'hover:bg-white/10 hover:text-white' },
                { href: 'https://linkedin.com/in/naga-sai-ramesh-kunapalli-023798283', icon: Linkedin, color: 'hover:bg-blue-600/10 hover:text-blue-400' },
                { href: 'https://youtube.com/@nagasairamesh06', icon: Youtube, color: 'hover:bg-red-600/10 hover:text-red-500' },
                { href: 'https://instagram.com/naga_sai_ramesh_kunapalli', icon: Instagram, color: 'hover:bg-pink-600/10 hover:text-pink-400' },
                { href: 'mailto:nagasairameshkunapalli@gmail.com', icon: Mail, color: 'hover:bg-purple-600/10 hover:text-purple-400' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl glass border border-white/5 flex items-center justify-center text-gray-400 transition-all hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] flex items-center gap-2 group"
              >
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Naga_Sai_Ramesh_Resume.pdf"
                target="_blank"
                className="px-7 py-3.5 glass hover:bg-white/5 text-white font-bold rounded-xl transition-all border border-white/10 hover:border-white/20 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Photo & Key Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Avatar Frame with animated glowing borders */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/5 animate-pulse-glow shadow-[0_0_50px_rgba(59,130,246,0.25)] animate-float">
              <img
                src="/Profile Pic.png"
                alt="Naga Sai Ramesh Kunapalli"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent"></div>
            </div>

            {/* Float Stats Badge Grid */}
            <div className="w-full max-w-lg mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center shadow-lg"
                >
                  <div className="p-2 bg-white/5 rounded-xl mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}>
          <ArrowRight className="w-6 h-6 rotate-90 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
