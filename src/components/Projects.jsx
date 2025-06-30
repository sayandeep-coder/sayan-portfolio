import React from 'react';
import { motion } from 'framer-motion';

const frontendProjects = [
  {
    title: 'My Portfolio',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dabfd8139668309.623368f07784b.jpg',
    description:
      'A personal portfolio website showcasing my skills, projects, and experiences. Built with ReactJS, Tailwind CSS, and Framer Motion.',
    github: 'https://github.com/sayandeep-coder/sayan-portfolio',
    skills: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
  },
  {
    title: 'Sidcup Family Golf',
    image: 'https://cssnectar.com/wp-content/uploads/2024/12/Sidcup-CSSNectar-1024x525.jpg',
    description:
      'A sleek and interactive website for Sidcup Family Golf, built with animations, parallax, and responsive design using JavaScript & GSAP.',
    github: 'https://github.com/sayandeep-coder',
    skills: ['JavaScript', 'GSAP', 'HTML', 'CSS'],
  },
  {
    title: 'Tindog Website',
    image: 'https://cdn.dribbble.com/userupload/10129787/file/original-8c7f344c54a5576579299fa3af58975f.png',
    description:
      'A fully responsive website for Tindog, built entirely with Bootstrap, featuring a clean and modern design.',
    github: 'https://github.com/sayandeep-coder/dog',
    skills: ['Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'Currency Converter',
    image: 'https://th.bing.com/th/id/OIP.Q2cSiLwUVchsgIzZpb44cAHaEy?cb=iwp2&w=680&h=440&rs=1&pid=ImgDetMain',
    description:
      'A real-time currency converter app using public APIs to fetch live rates. Built with HTML, CSS, and JavaScript.',
    github: 'https://github.com/sayandeep-coder',
    skills: ['JavaScript', 'HTML', 'CSS', 'API'],
  },
];

const mobileProjects = [
  {
    title: 'Flutter Quiz App',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/021388130717387.6186135ca1a9e.png',
    description:
      'A cross-platform quiz app built with Flutter and Dart, featuring multiple screens, result summaries, and smooth navigation.',
    github: 'https://github.com/sayandeep-coder/flutter-QUIZ-App',
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'Expense Tracker App',
    image: 'https://www.actitime.com/wp-content/uploads/2024/03/1Money-472x1024.png', // Placeholder, replace with your own
    description:
      'A simple and intuitive expense tracker app to manage your daily expenses. Built with Flutter and Firebase.',
    github: 'https://github.com/sayandeep-coder/flutter-Expense-Tracker-App',
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'Flutter Meal App',
    image: 'https://lasta.app/wp-content/uploads/2023/09/Lasta.png', // Placeholder image, replace with your own if available
    description:
      'A beautiful meal recipe app built with Flutter, allowing users to browse, filter, and favorite meals. Features category-based navigation and a modern UI.',
    github: 'https://github.com/sayandeep-coder/flutter-meal-app',
    skills: ['Flutter', 'Dart'],
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="projects">
      <div className="max-w-screen-lg mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h2 className="text-4xl font-bold mb-4">Projects</motion.h2>
        </motion.div>

        {/* Frontend Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-2">Frontend Development Projects</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-4 mt-6">
            {frontendProjects.map((project, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-xs">
                {/* Computer Mockup Frame */}
                <div className="relative w-[260px] h-[180px] bg-[#222] rounded-2xl border-4 border-gray-700 flex items-center justify-center overflow-hidden shadow-lg mb-2">
                  {/* Laptop top bar */}
                  <div className="absolute top-0 left-0 w-full h-4 bg-gray-800 rounded-t-xl flex items-center justify-center">
                    <div className="w-8 h-1.5 bg-gray-600 rounded-b-xl mt-2"></div>
                  </div>
                  {/* Project image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-b-xl"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline text-sm"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                {/* Skills badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="bg-[#232b3b] text-white px-3 py-1 rounded-full text-xs border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* iOS/Android Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-2">iOS/Android Development Projects</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-4 mt-6">
            {mobileProjects.map((project, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-xs">
                {/* Phone Mockup Frame */}
                <div className="relative w-[220px] h-[420px] bg-black rounded-2xl border-2 border-gray-700 flex items-center justify-center overflow-hidden shadow-lg mb-2">
                  {/* Project image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline text-sm"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                {/* Skills badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="bg-[#232b3b] text-white px-3 py-1 rounded-full text-xs border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="https://github.com/sayandeep-coder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 border border-purple-400 hover:from-purple-700 hover:to-blue-600 text-lg"
          >
            Show More
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


