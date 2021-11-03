import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import Profile from '../../../../../../../Profile/TA';

import './styles.css';

const style = {
  transform: 'scale(0.5)',
  top:'10%',
  boxShadow: '10px 10px 5px grey',
  left:'10%',
  overflow:'scroll',
  height:'100%',
  display:'block',
  borderRadius: '15px',
  border: '1px #0370ff',
  backDrop: {
    background: 'red !important',
  },
};

const btnStyle = {
    color: 'white'
}

function Action() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return <div className="actionbox">
    <Button sx={btnStyle} onClick={handleOpen}>View Profile</Button>
    <Divider />
    <Button sx={btnStyle}>Send Invite</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={style}
        onBackdropClick={handleClose}
        BackdropProps= {{
          classes: {
              root: style.backDrop
          }
      }}
      >
         <Profile id="modal-description" handleClose={handleClose} />
      </Modal>
</div>
}

export default Action;