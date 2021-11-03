import React from 'react';
import Divider from '@mui/material/Divider';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import './styles.css';

function Projects(props) {
    const { title, duration, companyName, playTime, imageURL} = props;
    return <div className="projectBox"> 
        <img className="projectImage" src={imageURL}/>
        <h4 style={{marginLeft: '1.5rem', alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>{title}</h4>
        <div className="projectStats">
            <div className="duration">
                <AccessTimeFilledIcon fontSize="large" color="primary" />
                <div style={{ marginLeft: '1rem'}}>
                    <div className="durationTitle">
                        Duration
                    </div>
                    <div className="durationStat">
                        <h5 style={{color: '#0370ff', margin: '0.1rem'}}>{duration}</h5>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" sx={{ borderColor: '#0370ff'}} />
            <div className="duration">
                <WorkIcon fontSize="large" color="primary" />
                <div style={{ marginLeft: '1rem'}}>
                    <div className="durationTitle">
                        Company
                    </div>
                    <div className="durationStat">
                        <h5 style={{color: '#0370ff', margin: '0.1rem'}}>{companyName}</h5>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" sx={{ borderColor: '#0370ff'}} />
            <div className="duration">
                <PlayCircleFilledIcon fontSize="large" color="primary" />
                <div style={{ marginLeft: '1rem'}}>
                    <div className="durationTitle">
                        Play
                    </div>
                    <div className="durationStat">
                        <h5 style={{color: '#0370ff', margin: '0.1rem'}}>{playTime}</h5>
                    </div>
                </div>
            </div>
            <div>
            <button className="projectDetailsBtn">
                View Details 
            </button>
            </div>
        </div>
    </div>
}

export default Projects;