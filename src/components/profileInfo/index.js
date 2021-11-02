import React from 'react';
import Button from '@mui/material/Button';

import './styles.css';

function ProfileInfo () {
    return <div className="profileInfoBox">
            <img className="profilePic"src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80" alt="Avatar"/>
            <h4 className="profileName">Nitesh Tiwari</h4>
            <text className="profilePosition">SDE-2 at PayPal</text>
            <button className="viewPortfolioBtn">View Portfolio</button>
    </div>
}

export default ProfileInfo;