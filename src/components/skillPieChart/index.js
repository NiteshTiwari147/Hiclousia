import "./styles.css";
import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";

const data = [
  { name: "React", value: 32 },
  { name: "JS", value: 20 },
  { name: "TypeScript", value: 20 },
  { name: "C++", value: 12 },
  { name: "C", value: 6 },
  { name: "Python", value: 5 },
  { name: "CSS", value: 5 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SkillPieChart() {
  return <div className="skillsPieChart">
        <h4 style={{marginBottom: '0rem'}}>Skill Percentage</h4>
        <PieChart width={800} height={400}>
        <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Legend wrapperStyle={{ left: '10px', width: '15rem', layout: 'vertical' }} />
        </PieChart>
  </div>
}
