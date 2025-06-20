import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 18l6-6-6-6M8 6l-6 6 6 6' /></svg>",
    skills: [
      { label: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "TailwindCSS", img: "https://avatars.githubusercontent.com/u/30317862?s=200&v=4" },
      { label: "Bootstrap", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s" },
    ],
  },
  {
    category: "iOS and Android Development",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 text-green-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' /></svg>",
    skills: [
      { label: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { label: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { label: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    category: "Programming Languages",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 text-yellow-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' /></svg>",
    skills: [
      { label: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { label: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { label: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    category: "Tools",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 text-purple-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' /></svg>",
    skills: [
      { label: "VSCode", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { label: "Cursor", img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
      { label: "PyCharm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { label: "IntelliJ IDEA", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80, damping: 12 },
  }),
};

const badgeVariants = {
  hover: {
    scale: 1.08,
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
    zIndex: 2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const SkillsSection = () => {
  return (
    <section
      className="min-h-screen bg-[#111827] text-white py-20 px-6"
      id="skills"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-[15px] md:gap-x-[40px] max-w-3xl min-h-[500px] mx-auto px-2 md:px-8">
        {skillsData.map((cat, i) => (
          <motion.div
            key={cat.category}
            className="bg-[#1f2937] rounded-xl p-6 shadow-md border border-gray-700 flex flex-col justify-center items-center w-full h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            whileHover={{ borderColor: "#a78bfa", boxShadow: "0 0 0 4px #a78bfa33" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            style={{ borderWidth: 2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-center">
              <span className="text-white/80">{cat.category}</span>
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.label}
                  className="flex items-center gap-2 bg-[#2d3748] px-4 py-2 rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer"
                  whileHover="hover"
                  variants={badgeVariants}
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

