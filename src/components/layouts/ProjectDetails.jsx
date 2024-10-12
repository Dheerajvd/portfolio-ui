import React from 'react';
import { useParams } from 'react-router-dom';
import { Icons } from '../../assets/exports';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();

    // Mock data for individual project details
    const projectData = {
        1: {
            title: 'Amazon Scrapper',
            description: 'Detailed description about the Amazon Scrapper project.',
        },
        2: {
            title: 'Portfolio Website',
            description: 'Detailed description about the Portfolio Website project.',
        },
        3: {
            title: 'E-Commerce App',
            description: 'Detailed description about the E-Commerce App project.',
        },
    };

    const project = projectData[id];

    return (
        <div className="contents-page">
            <div className="contents-header">
                <h2>My Skills</h2>
                <div className="button-links">
                    <Link to="/projects" className="view-more">
                        <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Go Back
                    </Link>
                    <Link to="/" className="view-more">
                        <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Home
                    </Link>
                </div>
            </div>
            <div className="details">
                <h1>{project?.title}</h1>
                <p>{project?.description}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
