import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./styles.css";

const data = [
  {
    name: 'SDE-1',
    AvailableJobs: 40000,
    SearchingCandidates: 28000,
    amt: 40000,
  },
  {
    name: 'SDE-2',
    AvailableJobs: 60000,
    SearchingCandidates: 52000,
    amt: 60000
  },
  {
    name: 'SDE-3',
    AvailableJobs: 35000,
    SearchingCandidates: 27000,
    amt: 35000
  },
  {
    name: 'SDE-4',
    AvailableJobs: 10000,
    SearchingCandidates: 6000,
    amt: 10000
  },
  {
    name: 'Tech Lead',
    AvailableJobs: 25000,
    SearchingCandidates: 12000,
    amt: 25000
  },
];

export default class JobsGraph extends PureComponent {
  render() {
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
}
