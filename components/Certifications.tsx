import React from 'react';
import { motion as motionHtml } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Background radial glows */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motionHtml.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-1.5 justify-center">
              <Sparkles className="w-3.5 h-3.5" /> My Credentials
            </span>
          </motionHtml.div>
          <motionHtml.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Certifications
          </motionHtml.h2>
        </div>

        {/* Certifications Grid */}
        <motionHtml.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motionHtml.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col justify-between shadow-xl group hover:border-white/10 transition-all relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full group-hover:from-blue-500/15 transition-all"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-blue-400 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <ShieldCheck className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-3">
                    {cert.name}
                  </h3>
                </div>

                {cert.duration && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{cert.duration}</span>
                  </div>
                )}
              </div>

              {cert.link && (
                <div className="pt-6 mt-4 border-t border-white/5">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-white/5 hover:bg-blue-600/10 text-xs font-bold text-gray-300 hover:text-blue-400 rounded-xl border border-white/5 hover:border-blue-500/25 transition-all flex items-center justify-center gap-1.5"
                  >
                    Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motionHtml.div>
          ))}
        </motionHtml.div>

      </div>
    </section>
  );
};

export default Certifications;
