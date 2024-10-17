import React, { useEffect, useState } from 'react';
import { Icons } from '../../assets/exports.jsx';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js';


const Landing = ({ scrollToSection }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getApi(endpoints.GET_LANDING).then((response) => {
      const resp = response.data;
      if (resp.statusCode === 200) {
        setData(resp.landingPageDetails);
      } else {
        navigate('/something-went-wrong');
      }
    }, (error) => {
      console.error('Error during API calls:', error);
      navigate('/something-went-wrong');
    });
  }, [])

  return (
    <>
      <div className="landing">
        <header className="hero">
          <div className="hero-content">
            <h1 className="title">
              I'm <span className="highlight">{data?.ui?.title}</span>
            </h1>
            <p>{data?.ui?.role}</p>
            <button className="contact-btn" onClick={() => { scrollToSection('contact-me') }}>Contact Me</button>
          </div>
          <div className="hero-image">
            <img src={Icons.myImage} alt="Dheeraj V Dalabanjan" />
          </div>
          <div className="social-links">
            <a target="_blank" href={data?.links?.linkedin}><img src={Icons.linedIn} alt="Linked In" /></a>
            <a target="_blank" href={data?.links?.insta}><img src={Icons.instagram} alt="Instagram" /></a>
            <a target="_blank" href={data?.links?.medium}><img src={Icons.medium} alt="Medium" /></a>
            <a target="_blank" href={data?.links?.whatsapp}><img src={Icons.whatsApp} alt="WhatsApp" /></a>
          </div>
        </header>

        <div className="about-details">
          <h2>About</h2>
          <p className='about-details-text'>{data?.about}</p>
        </div>
      </div>
    </>
  );
};


export default Landing;