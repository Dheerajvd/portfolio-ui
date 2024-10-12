import React from 'react';
import { Link } from 'react-router-dom';
import Skill from '../common/Skill';
import { Icons } from '../../assets/exports';

const Skills = ({ showAll }) => {
  const skills = [
    {
      id: 1,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 2,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 3,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 4,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 5,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 6,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg",
      priority: 1
    },
    {
      id: 7,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 8,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 9,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 10,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 14,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 12,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
    {
      id: 13,
      title: "Javascript",
      imagePath: "../../assets/images/logo.svg"
    },
  ]
  return (
    <>
      <div className="skills">
        <div className="skills-header">
          <h2>My Skills</h2>
          {showAll ? <Link to="/" className="view-more">
            Go Back <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />
          </Link> : <Link to="/skills" className="view-more">
            View More <img src={Icons.arrowRight} alt="arrow-right" className='arrow-icon' />
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
      </div>
    </>
  );
};

// View More <ArrowIcon className="arrow-icon" />

export default Skills;