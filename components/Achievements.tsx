import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Youtube, Instagram, Cpu, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase: Briefcase,
  Award: Award,
  Youtube: Youtube,
  Instagram: Instagram,
  Cpu: Cpu
};

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="achievements" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 blur-[130px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest flex items-center gap-1.5 justify-center">
              <Sparkles className="w-3.5 h-3.5" /> Milestones & Highlights
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Key Achievements
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-all shadow-xl"
              >
                {/* Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/5 to-purple-500/5 rounded-bl-full group-hover:from-pink-500/15 transition-colors"></div>

                <div className="space-y-6 relative z-10">
                  {/* Icon & Metric */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-pink-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <span className="text-gradient font-black text-lg md:text-xl block tracking-tight">
                      {item.metric}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
