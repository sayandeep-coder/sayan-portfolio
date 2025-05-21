
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24 overflow-hidden" id="home">
      {/* Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I am <span className="text-green-400">Sayandeep Purkait</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          I am a{' '}
          <span className="text-purple-400">
            <Typewriter
              words={['Frontend Developer', 'iOS Developer', 'Android Developer', 'Programmer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-300 mb-6">
          First year Computer Science with AI & ML student at Haldia Institute of Technology and a freelance web / App developer
          specializing in modern web technologies like ReactJS, Javascript, TailwindCSS,   Flutter, C, Python, Java.
        </p>
        <div className="mb-4 text-sm">
          🚀 Hiring? 💼 Have a project?
        </div>
        <div className="mb-6 text-sm">
          Email: <a href="mailto:your.email@gmail.com" className="text-blue-400">sayandeeppurkait@gmail.com</a>
        </div>
        <button id="hh" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition">
          Resume !
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 ml-3 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition" id="h">
          Hire Me !
        </button>
      </motion.div>

      {/* Right Side Image with Advanced Animations */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative h-96" ref={containerRef}>
        {/* Background elements that will move with mouse */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          {/* Hexagonal Grid Background */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="hexagons" width="10" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="5,8.66 10,8.66 7.5,13.66 2.5,13.66" fill="none" stroke="purple" strokeWidth="0.5"/>
                <polygon points="5,0 10,0 7.5,5 2.5,5" fill="none" stroke="purple" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </motion.div>

          {/* Pulsing Core Glow */}
          <motion.div
            className="absolute rounded-full bg-purple-500 w-72 h-72"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Rotating Tech Rings */}
          {[1, 1.5, 2].map((scale, i) => (
            <motion.div
              key={i}
              className="absolute border border-purple-400 rounded-full"
              style={{
                width: `${scale * 100}%`,
                height: `${scale * 100}%`,
                borderWidth: `${0.5 / scale}px`,
                opacity: 0.3 / scale
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40 + i * 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Floating Binary Code Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-purple-300 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, -100],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                delay: Math.random() * 5,
                repeat: Infinity,
                repeatDelay: Math.random() * 10
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Profile Image Container - Now Static */}
        <div className="relative z-10">
          <div className="rounded-full border-4 border-purple-500 p-2 bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl relative overflow-hidden">
            {/* Inner Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500 opacity-20 blur-md"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* The actual profile image - fixed position */}
            <img
              src="my.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover relative z-10 select-none"
              draggable="false"
            />
          </div>
        </div>

        {/* Animated Connection Nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const distance = 120;
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute w-3 h-3 bg-blue-400 rounded-full z-0"
              style={{
                left: `calc(50% + ${Math.cos(angle) * distance}px - 6px)`,
                top: `calc(50% + ${Math.sin(angle) * distance}px - 6px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0 0 rgba(96, 165, 250, 0.4)',
                  '0 0 0 10px rgba(96, 165, 250, 0)',
                  '0 0 0 0 rgba(96, 165, 250, 0)'
                ],
                x: mousePosition.x / 2,
                y: mousePosition.y / 2
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          );
        })}

        {/* Dynamic Connection Lines */}
        <svg className="absolute w-full h-full" style={{ pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => {
            const angle1 = (i * 45) * (Math.PI / 180);
            const angle2 = ((i + 2) * 45) * (Math.PI / 180);
            const distance = 120;
            
            return (
              <motion.path
                key={`line-${i}`}
                d={`
                  M ${50 + Math.cos(angle1) * 0.3 * distance}% 
                  ${50 + Math.sin(angle1) * 0.3 * distance}%
                  Q ${50 + Math.cos(angle1) * 0.6 * distance}% 
                  ${50 + Math.sin(angle1) * 0.6 * distance}%,
                  ${50 + Math.cos(angle2) * 0.6 * distance}% 
                  ${50 + Math.sin(angle2) * 0.6 * distance}%
                  T ${50 + Math.cos(angle2) * 0.3 * distance}% 
                  ${50 + Math.sin(angle2) * 0.3 * distance}%
                `}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.6,
                  x: mousePosition.x / 3,
                  y: mousePosition.y / 3
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            );
          })}
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
