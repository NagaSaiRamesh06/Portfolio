
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Languages', 'Web Technologies', 'Core Concepts', 'Tools'];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-400 max-w-lg">
              A comprehensive list of technologies and concepts I have mastered during my academic and professional journey.
            </p>
          </div>
          <div className="mt-6 md:mt-0 px-4 py-2 glass rounded-lg text-blue-400 text-sm font-mono">
            &lt;tech-stack /&gt;
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <span 
                    key={skill.name} 
                    className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-sm text-gray-300 hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
