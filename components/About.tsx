
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Crafting Digital Excellence <br />
            <span className="text-blue-500">One Line at a Time</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1: BIO (Large Left) */}
          <div className="md:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl text-white select-none transition-transform group-hover:scale-110 duration-700"></div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">About My Journey</span>
              </div>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  My name is <span className="text-white font-semibold">Naga Sai Ramesh Kunapalli</span>. I am a Computer Science graduate and MCA student with strong foundations in software development, data structures, and problem-solving.
                </p>
                <p>
                  I specialize in building scalable full-stack applications using <span className="text-blue-400">Python, React, and Node.js</span>. My focus is on creating intuitive user experiences backed by robust, AI-enhanced architectures.
                </p>

                <div className="border-l-4 border-blue-500 pl-6 my-8 bg-white/5 p-4 rounded-r-xl">
                  <p className="text-lg italic text-gray-200">
                    "Seeking to leverage my technical expertise in a high-growth environment, delivering innovative software solutions while pushing the boundaries of web technology."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* CARD 2: STATS (Moved Top) */}
            <div className="glass p-8 rounded-3xl flex flex-col justify-center gap-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <div className="text-3xl font-bold text-blue-500">2+</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Internships</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-500">4+</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Projects</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">4+</div>
                <div className="text-xs text-gray-400 font-bold uppercase">Certifications</div>
              </div>
            </div>

            {/* CARD 3: ACTIONS (New, Replaces Photo) */}
            <div className="glass p-8 rounded-3xl flex flex-col justify-center gap-4 h-[200px]">
              <a
                href="/Naga_Sai_Ramesh_Resume.pdf"
                target="_blank"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 flex justify-center items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="w-full py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex justify-center items-center gap-2 border border-white/10"
              >
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
