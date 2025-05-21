import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-8 px-4 flex flex-col items-center">
      <motion.h3
        className="text-xl font-semibold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        © 2025 Sayandeep Purkait. All Rights Reserved.
      </motion.h3>

      <motion.div
        className="flex space-x-6 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/sayandeep-coder"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="www.linkedin.com/in/sayandeeppurkait"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaLinkedin />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/_mr.purkait_/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaInstagram />
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/sayan.deep.purkait.2025"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaFacebook />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
