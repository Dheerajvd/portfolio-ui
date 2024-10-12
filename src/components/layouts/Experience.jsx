import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/exports';
import Timeline from '../common/Timeline';

const Experience = ({ showAll }) => {
  const timeLines = [
    {
      id: 1,
      startYear: "2021",
      jobTitle: "Software Engineer",
      jobLocation: "Pune, India",
      jobDescription: [
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 1 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 2 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 3 }
      ]
    },
    {
      id: 2,
      startYear: "2021",
      jobTitle: "Software Engineer",
      jobLocation: "Pune, India",
      jobDescription: [
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 1 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 2 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 3 }
      ]
    },
    {
      id: 3,
      startYear: "2021",
      jobTitle: "Software Engineer",
      jobLocation: "Pune, India",
      jobDescription: [
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 1 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 2 },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus', id: 3 }
      ]
    },
  ]
  return (
    <>
      <div className="contents-page">
        <div className="contents-header">
          <h2>Experience</h2>
          {showAll ? <Link to="/" className="view-more">
            Go Back <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />
          </Link> : <Link to="/experience" className="view-more">
            View More <img src={Icons.arrowRight} alt="arrow-right" className='arrow-icon' />
          </Link>}
        </div>
        <div className="timeline">
          {showAll ? timeLines
            .map((timeline) => (
              <Timeline key={timeline.id} timeline={timeline} />
            )) : timeLines
              .slice(0, 2)
              .map((timeline) => (
                <Timeline key={timeline.id} timeline={timeline} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Experience;