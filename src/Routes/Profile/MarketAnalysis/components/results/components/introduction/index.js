import React from 'react';

import './styles.css';

class Introduction extends React.Component {
    render () {

        return <div className="introduction">
            <h2 style={{marginBottom: '0.1rem'}}>{this.props.name}</h2>
        </div>
    }
}

export default Introduction;