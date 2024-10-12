import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Landing from './layouts/Landing';
import Skills from './layouts/Skills';
import Experience from './layouts/Experience';
import Projects from './layouts/Projects';
import Testimonials from './layouts/Testimonials';
import NotFound from './common/Notfound';

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
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Skills showAll={false} />
                <Experience />
                <Projects />
                <Testimonials />
              </>
            }
          />

          <Route path="/skills" element={<Skills showAll={true} />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
