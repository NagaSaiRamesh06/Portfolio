import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Info, X, CheckSquare, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-28 bg-[#030712]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
            >
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">My Creations</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/NagaSaiRamesh06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 group text-sm tracking-wide"
          >
            Explore All Projects 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="glass rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-white/10 transition-colors"
            >
              {/* Image Container with hover zoom */}
              <div className="relative h-56 sm:h-64 overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                
                {/* Tech Pills (floating bottom left) */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 rounded-lg">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold text-gray-400 border border-white/10 rounded-lg">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-500">Project 0{idx + 1}</span>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description[0]}
                  </p>
                </div>

                {/* Footer buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 transition-all"
                        aria-label="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-blue-600/10 hover:bg-blue-600/25 text-blue-400 rounded-xl border border-blue-500/20 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 text-xs font-extrabold tracking-wider bg-white text-gray-950 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5" /> VIEW DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Modal Container */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030712]/90 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="glass w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl overflow-y-auto max-h-[85vh] md:max-h-[90vh] flex flex-col"
              >
                {/* Header Image section */}
                <div className="relative h-48 md:h-64 shrink-0">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md text-gray-400 hover:text-white rounded-full border border-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 text-xs text-blue-400 font-bold rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Summary Details */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Project Highlights</h4>
                    <ul className="space-y-3">
                      {selectedProject.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed flex gap-3">
                          <CheckSquare className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  {selectedProject.features && (
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="text-gray-300 text-xs md:text-sm leading-relaxed flex gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Challenges */}
                  {selectedProject.challenges && (
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-pink-400" /> Technical Challenges
                      </h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* External links */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white hover:bg-gray-200 text-gray-950 font-bold rounded-xl transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" /> Github Link
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-600/25"
                      >
                        <ExternalLink className="w-4 h-4" /> View Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
