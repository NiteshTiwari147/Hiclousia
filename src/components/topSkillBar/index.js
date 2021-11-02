import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import './styles.css';

const data = [
      {name: 'react', projects: '4'},
      {name: 'python',projects: '6'},
      {name: 'Cpp', projects: '4'},
      {name: 'JS', projects: '3'},
      {name: 'Java', projects: '2'},
];

function TopSkillBarGraph () {
    return <div className="topSkillBarGraphBox">
        <h2 style={{alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>Top Skills Bar</h2>
            <BarChart width={ 210 } height={ 300 } data={ data } maxBarSize={ 20 } layout={ 'vertical' }>
                <CartesianGrid strokeDasharray="2" />
                <XAxis type={ 'number' } orientation={ 'bottom' } />
                <YAxis  type={ 'category' } orientation={ 'left' } dataKey={ 'name' } />
                <Bar dataKey={ 'projects' } fill={ '#0370ff' } barSize={'1'} />
            </BarChart>
        <h3 style={{alignSelf: 'baseline', width: 'inherit', color: 'gray'}}>2021-22</h3>
    </div>  
    
}

export default TopSkillBarGraph;
