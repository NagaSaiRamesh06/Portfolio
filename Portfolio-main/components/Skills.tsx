import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Terminal, Database, Cpu, Layers, Server, 
  Paintbrush, Wind, Shield, Network, FolderHeart, GitBranch, 
  Workflow, GitPullRequest, GitMerge, Github, Zap, Sparkles 
} from 'lucide-react';
import { SKILLS } from '../constants';

const SKILL_META: Record<string, { level: number; icon: React.ComponentType<{ className?: string }> }> = {
  'Python': { level: 90, icon: Terminal },
  'JavaScript': { level: 85, icon: Code },
  'SQL': { level: 80, icon: Database },
  'Java (Basic)': { level: 55, icon: Cpu },
  'React.js': { level: 88, icon: Layers },
  'Node.js': { level: 82, icon: Server },
  'HTML5': { level: 90, icon: Code },
  'CSS3': { level: 85, icon: Paintbrush },
  'Tailwind CSS': { level: 88, icon: Wind },
  'TypeScript': { level: 80, icon: Shield },
  'Data Structures': { level: 85, icon: Network },
  'OOP': { level: 88, icon: FolderHeart },
  'SDLC': { level: 80, icon: Workflow },
  'REST API Design': { level: 85, icon: GitPullRequest },
  'Git': { level: 85, icon: GitMerge },
  'GitHub': { level: 90, icon: Github },
  'Vite': { level: 80, icon: Zap },
  'Google Gemini API': { level: 85, icon: Sparkles }
};

const Skills: React.FC = () => {
  const categories = ['Languages', 'Web Technologies', 'Core Concepts', 'Tools'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

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
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">My Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Technical Expertise
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-2 glass rounded-2xl text-blue-400 text-sm font-mono border border-white/5 shadow-md"
          >
            &lt;tech-stack /&gt;
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div 
              key={category} 
              variants={cardVariants}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col justify-start shadow-xl group hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>{category}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  {SKILLS.filter(s => s.category === category).length} items
                </span>
              </h3>
              
              <div className="space-y-5 flex-1">
                {SKILLS.filter(s => s.category === category).map((skill) => {
                  const meta = SKILL_META[skill.name] || { level: 75, icon: Code };
                  const IconComponent = meta.icon;
                  
                  return (
                    <div key={skill.name} className="space-y-1.5 group/item">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-gray-300 group-hover/item:text-white transition-colors">
                          <div className="p-1 bg-white/5 rounded-lg border border-white/5 group-hover/item:bg-blue-600/10 group-hover/item:text-blue-400 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-gray-500 font-mono group-hover/item:text-blue-400 transition-colors">
                          {meta.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${meta.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
