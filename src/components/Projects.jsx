

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'My Portfolio',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dabfd8139668309.623368f07784b.jpg',
    description:
      'A personal portfolio website showcasing my skills, projects, and experiences. Built with ReactJS, Tailwind CSS, and Framer Motion.',
    github: 'https://github.com/sayandeep-coder',
  },
  {
    title: 'Sidcup Family Golf',
    image: 'https://cssnectar.com/wp-content/uploads/2024/12/Sidcup-CSSNectar-1024x525.jpg',
    description:
      'A sleek and interactive website for Sidcup Family Golf, built with animations, parallax, and responsive design using JavaScript & GSAP.',
    github: 'https://github.com/sayandeep-coder',
  },
  {
    title: 'Currency Converter',
    image: 'https://th.bing.com/th/id/OIP.Q2cSiLwUVchsgIzZpb44cAHaEy?cb=iwp2&w=680&h=440&rs=1&pid=ImgDetMain',
    description:
      'A real-time currency converter app using public APIs to fetch live rates. Built with HTML, CSS, and JavaScript.',
    github: 'https://github.com/sayandeep-coder',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20" id="projects">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 className="text-4xl font-bold mb-4" variants={item}>
          Projects
        </motion.h2>
        <motion.p className="text-gray-400" variants={item}>
          Here are some of my best projects. Hover to see more details.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl border border-purple-500"
            variants={item}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
  className="flex flex-col items-center mt-16"
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <motion.button
  className="text-l font-semibold text-purple-400 mb-4 px-6 py-3 border border-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  More projects coming soon!
</motion.button>

</motion.div>

    </section>
  );
};

export default Projects;

