import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import './styles.css';
function ATS () {
    const ATSdetails = {
        "communication": "88%",
        "skills": "17",
        "Projects": "13",
        "Prob_to_switch": "12%"
    }
    return <div className="ATS">
        <div className="miniBox">
            <div className="headingATS">
                <MessageIcon color="primary" fontSize="large" />
                <h3>Communication</h3> 
            </div>
            <h2 className="ATS_score" style={{marginRight: '0.5rem'}}>
                {ATSdetails.communication}
            </h2>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <AccountTreeIcon color="success" fontSize="large" />
                <h3>Total Projects</h3> 
            </div>
            <h2 className="ATS_score" style={{marginRight: '1rem'}}>
                {ATSdetails.Projects}
            </h2>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <SettingsIcon color="warning" fontSize="large" />
                <h3>Skills</h3> 
            </div>
            <h2 className="ATS_score" style={{marginRight: '1rem'}}>
                 {ATSdetails.skills}
            </h2>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <ChangeCircleIcon color="error" fontSize="large" />
                <h3>Probability to Switch</h3> 
            </div>
            <h2 className="ATS_score"  style={{marginRight: '0.5rem'}}>
                {ATSdetails.Prob_to_switch} 
            </h2>
        </div>
    </div>
}

export default ATS;