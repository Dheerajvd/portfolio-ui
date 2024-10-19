import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icons } from '../../assets/exports';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../api/endpoints.js';
import { getApi } from '../../api/index.js';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getApi(`${endpoints.GET_PROJECT_DETAILS}${id}`).then((response) => {
            const resp = response.data;
            if (resp.statusCode === 200) {
                setProject(resp.project);
            } else {
                navigate('/something-went-wrong');
            }
        }, (error) => {
            console.error('Error during API calls:', error);
            navigate('/something-went-wrong');
        });
    }, [id, navigate]);

    return (
        <div className="project-details-container">
            <div className="contents-header">
                <h2>Project Details</h2>
                <div className="button-links">
                    <Link to="/projects" className="view-more">
                        <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Go Back
                    </Link>
                    <Link to="/" className="view-more">
                        <img src={Icons.arrowLeft} alt="arrow-left" className='arrow-icon' />&nbsp;Home
                    </Link>
                </div>
            </div>
            <div className="project-details-content">
                <div className="project-image-title-description">
                    <div className="project-image">
                        <img src={project?.imagePath || "https://via.placeholder.com/250"} alt={project?.title} />
                    </div>
                    <div className="project-title-description">
                        <h1>{project?.title}</h1>
                        <p>{project?.description}</p>
                    </div>
                </div>
                <div className="project-meta">
                    <h3>Tech Stack:</h3>
                    <ul>
                        {project?.techStack?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <h3>Category:</h3>
                    <p>{project?.category === 'dev' ? "Development" : "Design"}</p>
                    <h3>Related To:</h3>
                    <p>{project?.relatedTo}</p>
                    {project.projLink !== " " ? (
                        <div>
                            <h3>Project Link:</h3>
                            <a href={project.projLink} target="_blank" rel="noopener noreferrer">{project.projLink}</a>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="project-descriptions">
                <h3>Project Highlights:</h3>
                <ul>
                    {project?.descriptions?.map((desc, index) => (
                        <li key={desc._id}>{desc.desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails;
