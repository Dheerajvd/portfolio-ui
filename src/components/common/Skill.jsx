import React from 'react'

const Skill = ({ skill }) => {
    return (
        <div className="skill-item" >
            <img src={skill.imagePath} alt={skill.title} className="skill-image" />
            <p className="skill-title">{skill.title}</p>
        </div >
    )
}

export default Skill