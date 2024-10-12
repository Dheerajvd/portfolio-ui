import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/exports';

const Projects = ({ showAll }) => {
    const projects = [
        {
            id: 1,
            title: 'Amazon Scrapper',
            description: 'A simple blog which has user authentication such as Sign Up, Sign In...',
            imgSrc: 'https://via.placeholder.com/250',
            category: "dev"
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'A personal portfolio to showcase my skills, projects, and experience.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "dev"
        },
        {
            id: 3,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "dev"
        },
        {
            id: 4,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "dev"
        },
        {
            id: 5,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "dev"
        },
        {
            id: 6,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "design"
        },
        {
            id: 7,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "design"
        },
        {
            id: 8,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "design"
        },
        {
            id: 9,
            title: 'E-Commerce App',
            description: 'An e-commerce platform with features like product listings, cart, and checkout.',
            imgSrc: 'https://via.placeholder.com/250',
            category: "design"
        },
    ];

    return (
        <div className="contents-page">
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
                                    <img src={project.imgSrc} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
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
                                    <img src={project.imgSrc} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <Link to={`/projects/${project.id}`} className="see-more-btn">See More</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div className="projects-grid">
                    {projects.slice(0,3)
                    .map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.imgSrc} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
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
