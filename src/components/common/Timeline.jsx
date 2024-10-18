import React from 'react'

const Timeline = ({ timeline }) => {
    return (
        <div className="timeline-item">
            <div className="year-badge hide">{timeline?.startYear}</div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h3>{timeline?.jobTitle}&nbsp;-&nbsp;<span className='year-show'>{timeline?.startYear}</span></h3>
                <p>{timeline?.jobCompany}&nbsp;[{timeline?.jobLocation}]</p>
                <ol>
                    {timeline?.jobDescription.map((description)=>(
                        <li key={description._id}>{description.desc}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Timeline