import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skill from '../common/Skill';
import { Icons } from '../../assets/exports';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js';

const Skills = ({ showAll }) => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getApi(endpoints.GET_SKILLS).then((response) => {
      const resp = response.data;
      if (resp.statusCode === 200) {
        setSkills(resp.skills);
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
      {skills.length > 0 ? <div className="contents-page">
        <div className="contents-header">
          <h2>My Skills</h2>
          {showAll ? <Link to="/" className="view-more">
            <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Go Back
          </Link> : <Link to="/skills" className="view-more">
            <img src={Icons.arrowRight} alt="arrow-right" className='arrow-icon' />&nbsp;View More
          </Link>}
        </div>
        <div className="skills-grid">
          {showAll ? skills
            .map((filteredSkill) => (
              <Skill key={filteredSkill.id} skill={filteredSkill} />
            )) : skills
              .filter((skill) => skill.priority === 1)
              .map((filteredSkill) => (
                <Skill key={filteredSkill.id} skill={filteredSkill} />
              ))}
        </div>
      </div> : "Loading"}

    </>
  );
};

export default Skills;