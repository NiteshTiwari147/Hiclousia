import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Introduction from './components/Introduction'; 
import StatBox from './components/stats';
import Action from './components/Action';

import './styles.css';

class Results extends React.Component {
    render () {
        const candidates = this.props.candidates;
        const statObjLabels = [
            {
                label: 'Communication'
            },
            {
                label: 'Prob to Switch'
            },
            {
                label: 'Skill Matched'
            },
            {
                label: 'Score'
            }
        ]
        return <div className="results">
                {candidates.map( candidate => {
                return <div className="candidateBox">
                    <img className="profileImage" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2-wVWrgPzb-wfIY8454qRDAcuijJY17rAKp3ASOZSORCGgMRAXNJvrUgAt-Ad" /> 
                    <Introduction name={candidate.name} current={candidate.currentJob} ATS={candidate.ATS}/>
                    <div className="stateBoxContainer">
                        { candidate.ATS.map( (obj,index) => <StatBox label={statObjLabels[index].label} score={obj} /> )}
                    </div>
                    <Action />
                </div>
                })}
        </div>
    }
}

export default Results;