import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    side: 'left',
    role: 'Web Developer',
    organization: 'IEEE HIT SB',
    period: 'April 2025 - Present',
    description: 'I joined IEEE HIT SB as a Web Developer in 2025. I am responsible for developing and maintaining the official website of IEEE HIT SB.',
  },
  {
    side: 'right',
    role: 'Web/App Developer',
    organization: 'Hitian Inside',
    period: 'May 2025 - Present',
    description: 'Hitian Inside is the official media club HIT,Halida. I am working as a Web/App Developer at Hitian Inside, building and maintaining web and mobile applications for the organization.',
  },
];

const Experience = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="experience" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0f0f1a] text-white flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center min-h-[500px]">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full -translate-x-1/2 z-0" />
        <div className="w-full h-[420px] relative">
          {/* Left card - top left */}
          <div className="absolute left-0 top-0 flex flex-col items-end md:pr-8 w-1/2">
            <div className="w-full max-w-md bg-[#181f2a] border border-gray-700 rounded-2xl shadow-lg p-6 relative">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <div className="text-gray-400 text-sm">IEEE HIT SB</div>
                  <div className="text-gray-500 text-xs">April 2025 - Present</div>
                </div>
                <button
                  className="ml-4 p-2 rounded-full hover:bg-gray-800 transition"
                  onClick={() => setOpenIdx(openIdx === 0 ? null : 0)}
                  aria-label="Toggle Description"
                >
                  {openIdx === 0 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <AnimatePresence>
                {openIdx === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-2"
                  >
                    I joined IEEE HIT SB as a Web Developer in 2025. I am responsible for developing and maintaining the official website of IEEE HIT SB.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Timeline dot */}
            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#232b3b] border-2 border-purple-400 rounded-full z-10" />
          </div>
          {/* Right card - bottom right */}
          <div className="absolute right-0 bottom-0 flex flex-col items-start md:pl-8 w-1/2">
            <div className="w-full max-w-md bg-[#181f2a] border border-gray-700 rounded-2xl shadow-lg p-6 relative">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Web/App Developer</h3>
                  <div className="text-gray-400 text-sm">Hitian Inside</div>
                  <div className="text-gray-500 text-xs">May 2025 - Present</div>
                </div>
                <button
                  className="ml-4 p-2 rounded-full hover:bg-gray-800 transition"
                  onClick={() => setOpenIdx(openIdx === 1 ? null : 1)}
                  aria-label="Toggle Description"
                >
                  {openIdx === 1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <AnimatePresence>
                {openIdx === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-2"
                  >
                    Hitian Inside is the official media club HIT,Halida. I am working as a Web/App Developer at Hitian Inside, building and maintaining web and mobile applications for the organization.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Timeline dot */}
            <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#232b3b] border-2 border-purple-400 rounded-full z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;