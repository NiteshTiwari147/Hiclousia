import React, { Component } from 'react'
 import ReactStoreIndicator from 'react-score-indicator'
 
 import './styles.css';
class ScoreIndicator extends Component {
  render () {
    return <div className="scoreBox">
        <h4 style={{marginTop: '0rem', marginBottom: '1rem'}}>Overall Average Score</h4>
         <ReactStoreIndicator
            value={86}
            maxValue={100}
        />
        <h6 style={{marginTop: '1rem', marginBottom: '1rem'}}>Your Overall performance is good</h6>
    </div>
  }
}

export default ScoreIndicator;