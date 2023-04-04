import "./Graphbar.css";
import React from "react";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
 // Tooltip,
  Legend
} from "recharts";

const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;

    /**
Component representing a bar chart displaying daily activity data
@param {Object} dataGraph - Data for the bar chart
@param {Array<Object>} dataGraph.dataGraph - Array of objects containing daily activity data
@param {string} dataGraph.dataGraph.day - The day of the week
@param {number} dataGraph.dataGraph.kilogram - The weight in kilograms for the given day
@param {number} dataGraph.dataGraph.calories - The calories burned for the given day
@returns {JSX.Element} - Rendered component
*/
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value.split(" ")[1]}
        </text>
      </g>
    );
  };
  
  export default function App(dataGraph) {
    console.log(dataGraph.dataGraph, "dataGraph")
    return (
      <BarChart
        width={1000}
        height={300}
        data={dataGraph.dataGraph}
        style={{ backgroundColor: "#FBFBFB" }}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
              <text
        x={130}
        y={30}
        textAnchor="middle"
        fontSize="22"
        fontWeight="bold"
        fill="#000000"
      >
        Activité quotidienne
      </text>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Legend
      iconSize={7}
      iconType="circle"
      layout="horizontal"
      verticalAlign="top"
      align="right"
      wrapperStyle={{ left: 140, top: 0, paddingTop: 10 }}
    />
        <Bar dataKey="kilogram" fill="#000000" radius={[10, 10, 0, 0]} barSize={12} name="Poids (kg)" />
    <Bar dataKey="calories" fill="#FF0000" radius={[10, 10, 0, 0]} barSize={12} name="Calories brûlées (kCal)" />
  </BarChart>
    );
  }

  App.propTypes = {
    dataGraph: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    kilogram: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    })).isRequired,
    };