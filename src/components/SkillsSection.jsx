

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    title: "iOS & Android Developer",
    image: "https://img.icons8.com/color/96/000000/android-os.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Developer",
    image: "https://img.icons8.com/color/96/000000/source-code.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JavaScript",
    image: "https://img.icons8.com/color/96/000000/javascript--v1.png",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "ReactJS",
    image: "https://img.icons8.com/officel/80/react.png",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Tailwind CSS",
    image: "https://img.icons8.com/color/96/000000/tailwindcss.png",
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Bootstrap",
    image: "https://img.icons8.com/color/96/000000/bootstrap.png",
    color: "from-violet-600 to-purple-800",
  },
  {
    title: "Flutter",
    image: "https://img.icons8.com/color/96/000000/flutter.png",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "C",
    image: "https://img.icons8.com/color/96/000000/c-programming.png",
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Python",
    image: "https://img.icons8.com/color/96/000000/python--v1.png",
    color: "from-blue-700 to-yellow-500",
  },
  {
    title: "Java",
    image: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png",
    color: "from-red-500 to-amber-600",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: {
        ease: "easeIn",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -45, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hover: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6"
      ref={ref} id="skillssection"
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl text-center shadow-xl cursor-default relative overflow-hidden group`}
            variants={itemVariants}
            whileHover="hover"
            custom={index}
          >
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  initial={{ 
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    width: Math.random() * 6 + 2,
                    height: Math.random() * 6 + 2,
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl"
              variants={{
                hover: { opacity: 0.1 }
              }}
            />

            <motion.div
              variants={iconVariants}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-12 h-12 object-contain"
              />
            </motion.div>

            <motion.p 
              className="text-lg font-semibold"
              variants={{
                hover: { 
                  color: "#ffffff",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }
              }}
            >
              {skill.title}
            </motion.p>

            {/* Skill level indicator */}
            <motion.div 
              className="h-1 bg-white/30 rounded-full mt-4 overflow-hidden"
              initial={{ scaleX: 0, originX: 0 }}
              variants={{
                visible: { 
                  scaleX: 1,
                  transition: { delay: 0.3 + index * 0.05 }
                }
              }}
            >
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ scaleX: 0 }}
                variants={{
                  visible: { 
                    scaleX: Math.random() * 0.6 + 0.4,
                    transition: { 
                      delay: 0.5 + index * 0.05,
                      type: "spring",
                      stiffness: 50
                    }
                  },
                  hover: {
                    scaleX: 1,
                    transition: { duration: 0.5 }
                  }
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;





