import React from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import { SharedMetrics } from '../../resources';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HVPieChart = ({
  data
}) => {

  const onPieEnter = (e) => {

  }

  return (
    <PieChart width={150} height={150} onMouseEnter={onPieEnter}>
      <Pie
        data={data}
        cx={SharedMetrics.cardHeight/2-5}
        cy={SharedMetrics.cardHeight/2-5}
        innerRadius={50}
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  );
}

export default HVPieChart;