import React from 'react'
import { Navbar1 } from "./components/ui/navbar-1";
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import GitHubSection from './components/GitHubSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar1 />
      <main>
        <Hero />
        <SkillsSection />
        <GitHubSection />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;