import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/exports';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js'

const Projects = ({ showAll }) => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getApi(endpoints.GET_PROJECTS).then((response) => {
            const resp = response.data;
            if (resp.statusCode === 200) {
                setProjects(resp.projects);
            } else {
                navigate('/something-went-wrong');
            }
        }, (error) => {
            console.error('Error during API calls:', error);
            navigate('/something-went-wrong');
        });
    }, [])

    return (
        <div className="contents-page">
            {console.log(projects)}
            <div className="contents-header">
                <h2>Projects</h2>
                {showAll ? <Link to="/" className="view-more">
                    <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Go Back
                </Link> : <Link to="/projects" className="view-more">
                    <img src={Icons.arrowRight} alt="arrow-right" className='arrow-icon' />&nbsp;View More
                </Link>}
            </div>
            {showAll ? (
                <div className='projects-list'>
                    <h2>Development</h2>
                    <div className="projects-grid">
                        {projects
                            .filter((project) => project.category === 'dev')
                            .map((project) => (
                                <div className="project-card" key={project.id}>
                                    <img src={project.imagePath || "https://via.placeholder.com/250"} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p className='project-description'>{project.description}</p>
                                        <Link to={`/projects/${project.id}`} className="see-more-btn">See More</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <h2>Design</h2>
                    <div className="projects-grid">
                        {projects
                            .filter((project) => project.category === 'design')
                            .map((project) => (
                                <div className="project-card" key={project.id}>
                                    <img src={project.imagePath || "https://via.placeholder.com/250"} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p className='project-description'>{project.description}</p>
                                        <Link to={`/projects/${project.id}`} className="see-more-btn">See More</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div className="projects-grid">
                    {projects.slice(0, 3)
                        .map((project) => (
                            <div className="project-card" key={project.id}>
                                <img src={project.imagePath || "https://via.placeholder.com/250"} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <h3>{project.title}</h3>
                                    <p className='project-description'>{project.description}</p>
                                    <Link to={`/projects/${project.id}`} className="see-more-btn">See More</Link>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
