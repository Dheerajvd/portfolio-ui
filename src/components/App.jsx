import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Landing from './layouts/Landing';
import Skills from './layouts/Skills';
import Experience from './layouts/Experience';
import Projects from './layouts/Projects';
import Testimonials from './layouts/Testimonials';
import ProjectDetails from './layouts/ProjectDetails';
import ContactMe from './layouts/ContactMe';
import NotFound from './common/Notfound';
import SomethingWrong from './common/SomethingWrong';

const App = () => {
  const landingRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactMeRef = useRef(null)

  const scrollToSection = (section) => {
    switch (section) {
      case 'landing':
        landingRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testimonials':
        testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact-me':
        contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <div>
        <Navbar scrollToSection={scrollToSection} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={landingRef}>
                  <Landing scrollToSection={scrollToSection} />
                </div>
                <div ref={skillsRef}>
                  <Skills showAll={false} />
                </div>
                <div ref={experienceRef}>
                  <Experience showAll={false} />
                </div>
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={testimonialsRef}>
                  <Testimonials />
                </div>
                <div ref={contactMeRef}>
                  <ContactMe />
                </div>
              </>
            }
          />

          <Route path="/skills" element={<Skills showAll={true} />} />
          <Route path="/experience" element={<Experience showAll={true} />} />
          <Route path="/projects" element={<Projects showAll={true} />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/something-went-wrong" element={<SomethingWrong />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
