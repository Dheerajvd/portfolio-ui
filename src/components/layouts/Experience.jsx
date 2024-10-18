import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/exports';
import Timeline from '../common/Timeline';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js';

const Experience = ({ showAll }) => {
  const [experiences, setExperiences] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getApi(endpoints.GET_EXPERIENCES).then((response) => {
      const resp = response.data;
      if (resp.statusCode === 200) {
        setExperiences(resp.experiences);
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
      <div className="contents-page">
        <div className="contents-header">
          <h2>Experience</h2>
          {showAll ? <Link to="/" className="view-more">
            <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Go Back
          </Link> : <Link to="/experience" className="view-more">
            <img src={Icons.arrowRight} alt="arrow-right" className='arrow-icon' />&nbsp;View More
          </Link>}
        </div>
        <div className="timeline">
          {showAll ? experiences
            .map((timeline) => (
              <Timeline key={timeline._id} timeline={timeline} />
            )) : experiences
              .slice(0, 2)
              .map((timeline) => (
                <Timeline key={timeline._id} timeline={timeline} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Experience;