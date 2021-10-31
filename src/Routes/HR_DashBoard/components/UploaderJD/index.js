import React, {useState } from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { fetchKeywords } from './actions';
import './styles.css';

function UploaderJD() {
      const dispatch = useDispatch();
      const [file, setFile ] = useState([]);
      const onFileChange = event => {
        setFile(event.target.files[0])
        dispatch(fetchKeywords());
      } 
      return <div className="uploaderContainer">
          <div className="uploader">
                <div className="uploaderContent">
                    <div className="uploadButton">
                         <input  classname="uploadBTN" type="file"  onChange={onFileChange} />
                        {/* <Button variant="outlined" onClick={() => {}}>
                       
                        </Button> */}
                    </div>
                    <div className="uploadText">
                        Upload your Job Description here
                    </div>
                </div>
                
          </div>
      </div>;
}

export default UploaderJD;