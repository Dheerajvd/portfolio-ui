import React from 'react';
import { Icons } from '../../assets/exports.jsx';

const Landing = ({ scrollToSection }) => {
  return (
    <>
      <div className="landing">
        <header className="hero">
          <div className="hero-content">
            <h1 className="title">
              I'm <span className="highlight">Dheeraj Dalabanjan</span>
            </h1>
            <p>Fullstack Developer</p>
            <button className="contact-btn" onClick={() => { scrollToSection('contact-me') }}>Contact Me</button>
          </div>
          <div className="hero-image">
            <img src={Icons.myImage} alt="Dheeraj V Dalabanjan" />
          </div>
          <div className="social-links">
            <a target="_blank" href="https://www.linkedin.com/in/dheeraj-v-dalabanjan-535540211/"><img src={Icons.linedIn} alt="Linked In" /></a>
            <a target="_blank" href="https://www.instagram.com/dheeraj__d/"><img src={Icons.instagram} alt="Instagram" /></a>
            <a target="_blank" href="https://medium.com/@dheeraj.dalabanjan"><img src={Icons.medium} alt="Medium" /></a>
            <a target="_blank" href="https://wa.me/+919113241023"><img src={Icons.whatsApp} alt="WhatsApp" /></a>
          </div>
        </header>

        <div className="about-details">
          <h2>About</h2>
          <p className='about-details-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
        </div>
      </div>
    </>
  );
};


export default Landing;