import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import './styles.css';

function RankingGraph (props) {
    const { data } = props;
    return <div class="rankGraphbox">
      <h4 style={{marginLeft: '2rem', alignSelf: 'baseline', color: '#0370ff'}}>Ranking</h4>
      <ResponsiveContainer width="100%" height="66%">
        <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#375069" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#375069" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16a0c1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#16a0c1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="A" stroke="#375069" fillOpacity={1} fill="#375069" />
            <Area type="monotone" dataKey="B" stroke="#16a0c1" fillOpacity={1} fill="#16a0c1" />
            <CartesianGrid strokeDasharray="1" />
            <Legend iconType="sqaure" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
}

export default RankingGraph;
