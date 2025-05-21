



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skillssection" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#ex" },
  { label: "Contact", href: "#contact" },
];

const linkVariant = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    scale: 1.1,
    color: "#38bdf8",
    transition: { type: "spring", stiffness: 300 },
  },
};

const underlineVariant = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

      let current = activeLink;

      for (let item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = item.href;
            break;
          }
        }
      }

      if (current !== activeLink) {
        setActiveLink(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  const handleNavClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-white fixed top-0 left-0 w-full z-50 shadow-lg bg-black bg-opacity-80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer select-none"
          onClick={() => handleNavClick("#home")}
        >
          <span className="text-cyan-400 animate-pulse">S</span>
          <span className="text-white">ayandeep</span>
        </h1>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              variants={linkVariant}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              className="relative cursor-pointer select-none"
            >
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-white text-lg px-2 py-1 transition-colors duration-300"
              >
                {item.label}
              </button>
              {activeLink === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                  variants={underlineVariant}
                  initial="initial"
                  animate="animate"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-screen bg-black shadow-lg z-50 px-6 py-10"
          >
            <ul className="flex flex-col space-y-6 text-white">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  whileHover={{ x: 5, color: "#38bdf8" }}
                  className="text-lg border-b border-gray-700 pb-2"
                >
                  <button onClick={() => handleNavClick(item.href)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
