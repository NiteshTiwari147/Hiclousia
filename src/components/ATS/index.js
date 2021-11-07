import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import './styles.css';
function ATS (props) {
   const { communication, prob_to_switch, projects, skills} = props;
    return <div className="ATS">
        <div className="miniBox">
            <div className="headingATS">
                <MessageIcon color="primary" fontSize="large" />
                <h4>Communication</h4> 
            </div>
            <h3 className="ATS_score" style={{marginRight: '0.5rem'}}>
                {communication}
            </h3>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <AccountTreeIcon color="success" fontSize="large" />
                <h4>Total Projects</h4> 
            </div>
            <h3 className="ATS_score" style={{marginRight: '1rem'}}>
                {projects}
            </h3>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <SettingsIcon color="warning" fontSize="large" />
                <h4>Skills</h4> 
            </div>
            <h3 className="ATS_score" style={{marginRight: '1rem'}}>
                 {skills}
            </h3>
        </div>
        <div className="miniBox">
            <div className="headingATS">
                <ChangeCircleIcon color="error" fontSize="large" />
                <h4>Probability to Switch</h4> 
            </div>
            <h3 className="ATS_score"  style={{marginRight: '0.5rem'}}>
                {prob_to_switch} 
            </h3>
        </div>
    </div>
}

export default ATS;