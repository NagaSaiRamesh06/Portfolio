
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
        
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-16 last:pb-0 group">
              {/* Timeline Line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 group-last:bg-gradient-to-b group-last:from-white/10 group-last:to-transparent"></div>
              {/* Dot */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform"></div>
              
              <div className="glass p-8 rounded-2xl group-hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/10">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-400 leading-relaxed">
                      <span className="text-blue-500 mt-1.5 shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
