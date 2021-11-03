import React from 'react';

import './styles.css';

class StatBox extends React.Component {
    render() {
        return <div className="statBox">
            <div className="statBoxText">
                {this.props.label}
            </div>
            <div className="statBoxScore">                            
               <h5 style={{marginTop: '0.5rem'}}>{this.props.score}</h5>
            </div>
        </div>
    }
}

export default StatBox;