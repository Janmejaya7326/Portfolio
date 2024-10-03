import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'skill', 'project', 'experience', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="App">
      <NavBar currentSection={currentSection} handleScroll={handleScroll} />
      <div className="mt-24">
        <Home />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Contact />
        <Footer /> {/* Add Footer component here */}
      </div>
    </div>
  );
}

export default App;
