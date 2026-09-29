import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <div className="bg-[#030712] relative overflow-hidden">
      
      {/* Education Section */}
      <section id="education" className="py-28 border-b border-white/5">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
            >
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">My Academics</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Education Background
            </motion.h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent"></div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-12"
            >
              {EDUCATION.map((edu, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                    {/* circular timeline node */}
                    <div className="absolute left-[9px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-[#030712] border-4 border-purple-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Spacer for layout */}
                    <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3'}`}></div>

                    {/* Timeline card */}
                    <motion.div
                      variants={itemVariants}
                      className={`w-full md:w-[45%] pl-10 md:pl-0 order-2 glass p-6 rounded-3xl border border-white/5 hover:bg-white/5 transition-all shadow-xl ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className={`flex items-center gap-2 text-xs font-mono text-gray-500 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{edu.period}</span>
                        </div>
                        
                        <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                        
                        <p className="text-blue-400 text-sm font-semibold flex items-center gap-1.5 justify-start md:group-hover:text-purple-400 transition-colors md:justify-start">
                          <span className={`flex items-center gap-1.5 w-full ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            <BookOpen className="w-4 h-4 shrink-0" />
                            <span>{edu.institution}</span>
                          </span>
                        </p>

                        <div className={`flex flex-wrap items-center gap-3 pt-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-black">
                            {edu.score}
                          </span>
                          {edu.details && (
                            <span className="text-xs text-gray-400 italic">
                              {edu.details}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-28 relative overflow-hidden bg-[#030712]">
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
            >
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Verified Credentials</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Certifications
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-purple-500/20 hover:bg-white/5 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-bl-full group-hover:bg-purple-500/10 transition-colors"></div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Award className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold">{cert.issuer}</p>
                    {cert.duration && (
                      <span className="text-[10px] text-gray-500 font-mono italic block pt-1">
                        Duration: {cert.duration}
                      </span>
                    )}
                  </div>
                </div>

                {cert.link && (
                  <div className="pt-5 mt-4 border-t border-white/5">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-white hover:text-purple-400 transition-colors"
                    >
                      View Certificate <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Education;
