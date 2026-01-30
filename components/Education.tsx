
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="bg-white/[0.02]">
      {/* Education Section */}
      <section id="education" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    <path d="M3.88 12.88L2 14v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5l-1.88-1.12L12 18l-8.12-5.12z" />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-gray-400 text-sm font-mono">{edu.period}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 font-bold">
                    {edu.score}
                  </span>
                  {edu.details && (
                    <span className="text-gray-500 italic">
                      {edu.details}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold mb-12">Certifications</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="glass p-6 rounded-xl border-l-2 border-purple-500 hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-purple-400">{cert.issuer}</span>
                      {cert.duration && <span className="text-gray-500 italic">{cert.duration}</span>}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-purple-400 transition-colors"
                      >
                        View Certificate
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-12">Leadership & Activities</h2>
              <div className="glass p-8 rounded-2xl space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Class Representative
                  </h4>
                  <p className="text-sm text-gray-400">Facilitated communication between peers and faculty during undergraduate studies.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Content Creator (YouTube)
                  </h4>
                  <p className="text-sm text-gray-400">Grew and managed a channel with over 15K+ subscribers.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    Influencer (Instagram)
                  </h4>
                  <p className="text-sm text-gray-400">Built a community of 13K+ followers through consistent high-quality content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
