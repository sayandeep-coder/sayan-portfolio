import { motion } from 'framer-motion';
import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const educationData = [
    {
      institution: "Haldia Institute of Technology, Haldia",
      degree: "Bachelor of Technology – BTech, Computer Science and Engineering",
      period: "Sep 2024 - July 2028",
      grade: "8.9 SGPA",
      description: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering ( AI & ML) at Haldia Institute of Technology, Haldia. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, AI, ML ...",
    },
    {
      institution: "Fatepur Sreenath Institution",
      degree: "West Bengal Council of Higher Secondary Education, PCMC",
      period: "Jan 2016 – Feb 2024",
      grade: "87.4%",
      description: "I completed my class 12 high school education at Fatepur Sreenath Institution, WB, where I studied Science (PCMC).",
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0f0f1a] text-white overflow-hidden"
      id="education"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-400"
        >
          Education
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl"
        >
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Timeline Navigation - Scrollbar hidden */}
          <motion.div 
            className="md:w-1/4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {educationData.map((edu, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 rounded-lg text-left whitespace-nowrap transition-all flex-shrink-0 md:flex-shrink ${activeTab === index ? 'bg-purple-600 text-white' : 'bg-[#1e1e2d] text-gray-300 hover:bg-[#2a2a3a]'}`}
                >
                  <span className="font-semibold text-sm sm:text-base">{edu.institution.split(',')[0]}</span>
                  <span className="block text-xs sm:text-sm opacity-80">{edu.period}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Education Content */}
          <motion.div 
            className="md:w-3/4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            key={activeTab}
          >
            <div className="bg-[#1e1e2d] rounded-xl p-5 sm:p-6 md:p-8 shadow-2xl">
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {educationData[activeTab].institution}
              </motion.h3>
              
              <motion.p 
                className="text-base sm:text-lg text-blue-300 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {educationData[activeTab].degree}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-green-900/30 text-green-400 rounded-full font-semibold text-sm sm:text-base">
                  {educationData[activeTab].grade}
                </span>
                <span className="text-gray-400 text-sm sm:text-base">{educationData[activeTab].period}</span>
              </motion.div>
              
              <motion.div 
                className="border-t border-gray-700 pt-4 sm:pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {educationData[activeTab].description}
                </p>
              </motion.div>
            </div>

            {/* Animated decorative elements */}
            <motion.div 
              className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-3xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbars globally */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
};

export default Education;