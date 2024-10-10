import React, { useRef } from 'react';
import Navbar from './common/Navbar';
import Landing from './layouts/Landing';
import Skills from './layouts/Skills';
import Experience from './layouts/Experience';
import Projects from './layouts/Projects';
import Testimonials from './layouts/Testimonials';

const App = () => {
  // Create refs for each section
  const landingRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    switch (section) {
      case 'landing':
        landingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testimonials':
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />

      <div ref={landingRef}>
        <Landing />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
