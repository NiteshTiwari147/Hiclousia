import React from 'react'
import Button from '@mui/material/Button';
import './styles.css';

class UploaderJD extends React.Component {
    render() {
      return <div className="uploaderContainer">
          <div className="uploader">
                <div className="uploaderContent">
                    <div className="uploadButton">
                        <Button variant="outlined">Choose File</Button>
                    </div>
                    <div className="uploadText">
                        Upload your Job Description here
                    </div>
                </div>
                
          </div>
      </div>;
    }
}

export default UploaderJD;