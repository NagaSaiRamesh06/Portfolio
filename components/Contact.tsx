import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate slight submission delay for premium feel
    setTimeout(() => {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = `mailto:nagasairameshkunapalli@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const contactMethods = [
    {
      label: 'Email',
      value: 'nagasairameshkunapalli@gmail.com',
      href: 'mailto:nagasairameshkunapalli@gmail.com',
      icon: Mail,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      label: 'Phone',
      value: '+91-9948060152',
      href: 'tel:+919948060152',
      icon: Phone,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      label: 'LinkedIn',
      value: 'Naga Sai Ramesh',
      href: 'https://linkedin.com/in/naga-sai-ramesh-kunapalli-023798283',
      icon: Linkedin,
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/10'
    },
    {
      label: 'GitHub',
      value: 'NagaSaiRamesh06',
      href: 'https://github.com/NagaSaiRamesh06',
      icon: Github,
      color: 'text-gray-200',
      bgColor: 'bg-white/10'
    },
    {
      label: 'Resume',
      value: 'Naga_Sai_Ramesh_Resume.pdf',
      href: '/Naga_Sai_Ramesh_Resume.pdf',
      icon: FileText,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#030712]">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-1.5 justify-center">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Reach Out
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Let's Build Something <span className="text-blue-500">Amazing</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Contact cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-5 space-y-4 flex flex-col justify-between"
            >
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="glass p-5 rounded-3xl border border-white/5 flex items-center gap-5 hover:bg-white/5 transition-all shadow-md group relative overflow-hidden"
                >
                  {/* Decorative card gradient */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>

                  <div className={`w-12 h-12 rounded-2xl ${method.bgColor} flex items-center justify-center ${method.color} border border-white/5 shrink-0 group-hover:scale-105 transition-transform`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                      {method.label}
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors block truncate">
                      {method.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Right Column: Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.15 }}
              className="lg:col-span-7 glass p-8 md:p-10 rounded-[36px] border border-white/5 shadow-2xl relative"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Naga Sai Ramesh"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nagasairamesh@gmail.com"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you build your next solution?"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
