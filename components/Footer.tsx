import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Mail, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 border-t border-white/5 bg-[#030712] relative overflow-hidden">
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: BRAND */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                N
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Ramesh K.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting scalable, high-performance web applications with a focus on user experience, machine learning integration, and clean code.
            </p>
            
            {/* Social Icons Links */}
            <div className="flex gap-4 pt-2">
              {[
                { href: 'https://github.com/NagaSaiRamesh06', icon: Github, hover: 'hover:bg-white/10 hover:text-white' },
                { href: 'https://linkedin.com/in/naga-sai-ramesh-kunapalli-023798283', icon: Linkedin, hover: 'hover:bg-blue-600/10 hover:text-blue-400' },
                { href: 'https://youtube.com/@nagasairamesh06', icon: Youtube, hover: 'hover:bg-red-600/10 hover:text-red-500' },
                { href: 'https://instagram.com/naga_sai_ramesh_kunapalli', icon: Instagram, hover: 'hover:bg-pink-600/10 hover:text-pink-400' },
                { href: 'mailto:nagasairameshkunapalli@gmail.com', icon: Mail, hover: 'hover:bg-purple-600/10 hover:text-purple-400' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl glass border border-white/5 flex items-center justify-center text-gray-400 transition-all hover:scale-105 ${social.hover}`}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Navigation</h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Capabilities</h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>Full Stack Web Development</li>
              <li>Python & Scripting Automations</li>
              <li>NLP & LLM Conversational Integration</li>
              <li>Database Design & API Architectures</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>© 2026 Naga Sai Ramesh Kunapalli. All rights reserved.</div>
          <button 
            onClick={scrollToTop}
            className="p-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 transition-all flex items-center gap-2 group text-[10px] font-bold tracking-wider"
          >
            BACK TO TOP <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
