import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import './styles.css';

function TopSkillBarGraph (props) {
    const wdth = props.wdth || 210;
    const data = props.data;
    return <div className="topSkillBarGraphBox">
        <h4 style={{alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>Top Skills Bar</h4>
            <BarChart width={ wdth } height={ 300 } data={ data } maxBarSize={ 20 } layout={ 'vertical' }>
                <CartesianGrid strokeDasharray="2" />
                <XAxis type={ 'number' } orientation={ 'bottom' } />
                <YAxis  type={ 'category' } orientation={ 'left' } dataKey={ 'name' } />
                <Bar dataKey={ 'projects' } fill={ '#0370ff' } barSize={'0'} />
            </BarChart>
        <h5 style={{alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>2021-22</h5>
    </div>  
    
}

export default TopSkillBarGraph;
