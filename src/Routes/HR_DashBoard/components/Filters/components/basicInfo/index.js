import React from 'react';
import TextField from '@mui/material/TextField';

import './styles.css';

class BasicInfo extends React.Component {
    render() {
        return <div className="basicInfo">
            <div className="profileName">
                <TextField id="standard-basic" label="Profile Name" variant="standard" />
            </div>
            <div className="location">
                <TextField id="standard-basic" label="Location" variant="standard" />
            </div>
        </div>

    }
}

export default BasicInfo;