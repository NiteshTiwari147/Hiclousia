import React from 'react';

import './styles.css';

class Introduction extends React.Component {
    getCategory() {
        const skillmatech = this.props.ATS[2];
        const score =  this.props.ATS[3]
        const avg = (skillmatech+score)/2
        if(avg>90)
        return <div className="category excellent">
           Excellent
        </div>
        else if(avg>80) 
        return <div className="category good">
            Good
         </div>
         else 
         return <div className="category avg">
            Average
         </div>
    }
    render () {
        return <div className="introduction">
            <h2 style={{marginBottom: '0.1rem'}}>{this.props.name}</h2>
            <div className="current">
                {this.props.current.position} at {this.props.current.company}
            </div>
            <div className="duration">
            {this.props.current.duration.from}-till now
            </div>
            <div className="category">
                {this.getCategory()}
            </div>
        </div>
    }
}

export default Introduction;