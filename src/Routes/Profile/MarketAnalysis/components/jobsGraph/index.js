import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getGraphData } from '../../service/graphHandler';
import "./styles.css";

export default function JobsGraph () {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/jobGraph")
    .then((res) => res.json())
    .then((data) => {
        setData(data.resp);
    }, []);
  });
  return (
    <ResponsiveContainer width="90%" height="75%" className="jobsGraph">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="AvailableJobs" barSize={15} stackId="a" fill="#0370ff" />
        <Bar dataKey="SearchingCandidates" stackId="a" fill="#e2efff" />
      </BarChart>
    </ResponsiveContainer>
  );
}
