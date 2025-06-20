import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const socials = [
  {
    icon: <Github className="w-10 h-10" />, label: 'GitHub', link: 'https://github.com/sayandeep-coder', color: 'bg-[#232b3b] text-white',
  },
  {
    icon: <Instagram className="w-10 h-10" />, label: 'Instagram', link: 'https://www.instagram.com/_mr.purkait_/', color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white',
  },
  {
    icon: <Linkedin className="w-10 h-10" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sayandeeppurkait/', color: 'bg-[#0077b5] text-white',
  },
  {
    icon: <Mail className="w-10 h-10" />, label: 'Gmail', link: 'mailto:sayandeeppurkait@gmail.com', color: 'bg-[#ea4335] text-white',
  },
];

const Connect = () => {
  return (
    <section id="connect" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#181f2a] via-[#232b3b] to-[#181f2a] px-4 py-16">
      <div className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col items-center border border-white/10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-300 mb-10 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Find me on social media or send a direct message to get in touch
        </motion.p>
        <div className="w-full">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className={`rounded-full ${s.color} flex items-center justify-center w-20 h-20 shadow-lg mb-3 transition-all group-hover:shadow-2xl group-hover:scale-110`}>
                  {s.icon}
                </span>
                <span className="text-white text-base font-medium mt-1 opacity-80 group-hover:opacity-100 transition-all">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect; 