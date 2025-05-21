import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer",
      organization: "IEEE HIT SB",
      period: "April 25 - Present",
      description: "I joined IEEE HIT SB as a Web Developer in 2025. I am responsible for developing and maintaining the official website of IEEE HIT SB.",
      skills: ["ReactJS", "Tailwind CSS", "Javascript"]
    }
    // Add more experiences here as needed
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0f0f1a] text-white overflow-hidden"
      id="experience"
    >
      <div className="max-w-6xl mx-auto" id="ex">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-400">
            Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            My work experience as a Web Developer and working on different projects.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-500 rounded-xl pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              />

              <div className="bg-[#1e1e2d] rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Floating tech circles */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Role and Organization */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                    <p className="text-lg text-blue-300">{exp.organization}</p>
                    <span className="hidden sm:block text-gray-500">•</span>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-[#2a2a3a] text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;