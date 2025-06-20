import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function cn(...args) {
  return args.filter(Boolean).join(" ");
}

const navItems = [
  "Home",
  "Skills",
  "Experience",
  "GitHub",
  "Projects",
  "Connect",
  "Login",
];

const skills = [
  "JavaScript", "ReactJS", "Flutter", "C", "Python", "Java", "Dart", "TailwindCSS", "Bootstrap"
];

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181f2a] via-[#232b3b] to-[#181f2a] text-white flex flex-col items-center justify-center px-4 pt-24 overflow-hidden" id="home">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center w-full flex-1 mt-32 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Hello, I'm <span className="text-[#4fd1c5]">Sayandeep Purkait</span>
        </h1>
        {/* Animated subtitle with typewriter effect */}
        <TypewriterRoles />
        <a
          href="https://drive.google.com/drive/folders/15JXTS08319pdts5sHQAg6diXbdzMoUDK?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#232b3b] hover:bg-[#2d3748] text-white px-6 py-2 rounded-full font-semibold shadow-lg transition mb-8 border border-[#2d3748]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v13.5A2.25 2.25 0 009.75 22.5h4.5a2.25 2.25 0 002.25-2.25V13.5m-6.75 0h6.75m0 0l-2.25-2.25m2.25 2.25l-2.25 2.25" />
          </svg>
          View Resume
        </a>
        {/* Contact Card/Button */}
        <a
          href="mailto:sayandeeppurkait@gmail.com"
          className="flex items-center gap-2 bg-[#232b3b] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition mb-8 border border-[#2d3748] text-lg hover:border-cyan-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          Have a project? Mail me <span className="ml-1 text-decoration-none text-cyan-600">sayandeeppurkait@gmail.com</span>
        </a>
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full max-w-4xl overflow-hidden">
            <div className="flex animate-scroll-skills whitespace-nowrap">
              {skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center flex-grow min-w-[140px] mx-[10px]">
                  <span className="text-lg font-semibold bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow w-full text-center">{skill}</span>
                </div>
              ))}
              {skills.map((skill, i) => (
                <div key={`repeat-${i}`} className="flex flex-col items-center flex-grow min-w-[140px] mx-[10px]">
                  <span className="text-lg font-semibold bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow w-full text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function TypewriterRoles() {
  const roles = [
    "Frontend Developer",
    "iOS Developer",
    "Android Developer",
    "Programmer"
  ];
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [typing, setTyping] = React.useState(true);

  React.useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[index].slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[index].slice(0, displayed.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, roles]);

  return (
    <div className="text-lg md:text-2xl text-center text-gray-300 mb-8 h-8 flex items-center justify-center min-h-[2.5rem]">
      I am a <span className="text-[#4fd1c5] ml-2">{displayed}<span className="animate-pulse">|</span></span>
    </div>
  );
}

export default Hero;

