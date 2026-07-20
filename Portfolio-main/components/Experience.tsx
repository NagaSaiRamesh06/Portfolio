import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Background gradients */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">My Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connector */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  
                  {/* Timeline circular node */}
                  <div className="absolute left-[9px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-[#030712] border-4 border-blue-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Left spacer for desktop layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3'}`}></div>

                  {/* Timeline Card */}
                  <motion.div 
                    variants={cardVariants}
                    className={`w-full md:w-[45%] pl-10 md:pl-0 order-2 glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group-hover:bg-white/5 transition-colors shadow-2xl ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {/* Floating Glow */}
                    <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:from-blue-600/25 transition-colors"></div>

                    {/* Metadata Header */}
                    <div className="space-y-2 mb-6">
                      <div className={`flex items-center gap-2 text-sm text-gray-400 font-bold ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <div className={`flex items-center gap-2 text-blue-400 font-semibold ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className={`space-y-3.5 text-sm text-gray-400 ${
                      isEven ? 'md:flex md:flex-col md:items-end' : ''
                    }`}>
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className={`flex gap-3 leading-relaxed ${
                          isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'
                        }`}>
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
