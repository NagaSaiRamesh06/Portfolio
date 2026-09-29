import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Terminal, Heart, Download, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Get To Know Me</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Crafting Digital Excellence <span className="text-blue-500">One Line</span> at a Time
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Who Am I */}
          <motion.div 
            variants={cardVariants}
            className="glass p-8 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-all relative overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Who Am I</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                My name is <span className="text-white font-semibold">Naga Sai Ramesh Kunapalli</span>. I am an aspiring software engineer and current Master of Computer Applications (MCA) student at JNTU Gurajada Vizianagaram. I enjoy coding clean interfaces and solving logical challenges.
              </p>
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
          </motion.div>

          {/* Card 2: Technical Focus */}
          <motion.div 
            variants={cardVariants}
            className="glass p-8 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-all relative overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tech Specialization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I specialize in full-stack web architectures using <span className="text-white font-semibold">Python, React, Node.js, and SQL</span>. I build responsive frontends integrated with optimized machine learning logic, NLP classifiers, and Gemini APIs.
              </p>
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
          </motion.div>

          {/* Card 3: Academic Background */}
          <motion.div 
            variants={cardVariants}
            className="glass p-8 rounded-3xl flex flex-col justify-between group hover:scale-[1.02] transition-all relative overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Academic Path</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently pursuing my Master of Computer Applications (2024-2026 expected) at <span className="text-white font-semibold">JNTU GV</span> with an active score of <span className="text-pink-400 font-bold">7.87 SGPA</span>. Background in Mathematics, Chemistry, and Computer Science (B.Sc. - 8.27 CGPA).
              </p>
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-28 h-28 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors"></div>
          </motion.div>

          {/* Card 4: Philosophy */}
          <motion.div 
            variants={cardVariants}
            className="glass p-8 rounded-3xl md:col-span-2 flex flex-col justify-between group hover:scale-[1.02] transition-all border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">My Mission</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                "Seeking to leverage technical foundations in machine learning, Python, and frontend development in a high-growth environment. I am dedicated to writing clean, maintainable code, implementing responsive design patterns, and building solutions that deliver business value and clean developer experiences."
              </p>
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-36 h-36 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Card 5: Resume & Call to Action */}
          <motion.div 
            variants={cardVariants}
            className="glass p-8 rounded-3xl flex flex-col justify-center gap-4 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <a
              href="/Naga_Sai_Ramesh_Resume.pdf"
              target="_blank"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 flex justify-center items-center gap-2 group active:scale-95"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full py-4 glass hover:bg-white/5 text-white font-bold rounded-2xl transition-all flex justify-center items-center gap-2 border border-white/10 hover:border-white/20 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
