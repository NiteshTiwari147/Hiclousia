import React from 'react';

import './styles.css';

class Introduction extends React.Component {
    render () {

        return <div className="introduction">
            <h4 style={{marginBottom: '0.1rem'}}>{this.props.name}</h4>
        </div>
    }
}

export default Introduction;