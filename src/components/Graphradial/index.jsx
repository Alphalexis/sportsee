import "./Graphradial.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const style = {
  top: 20,
  left: 0,
  lineHeight: "24px"
};

/**
React component that displays a radial chart representing a user's score.
@param {Object} dataGraph - The data to build the chart.
@param {Object} dataGraph.dataGraph - The data to build the chart.
@param {Array} dataGraph.dataGraph.score - The user's scores.
@param {Array} dataGraph.dataGraph.todayScore - The user's current score.
@returns {JSX.Element} - The React component for the radial chart.
*/

export default function App(dataGraph) {
  console.log(dataGraph, "dataGraph radial");
  const score = dataGraph.dataGraph.score || dataGraph.dataGraph.todayScore;
  console.log(score, "score de radial");
  const getFormattedScoreDatas = () => {
    return [
      { id: 2, todayScore: 100, opacity: 0 },
      { id: 1, todayScore: score * 100, fill: "#E60000" },
    ];
  };
  const data = getFormattedScoreDatas();
  console.log(data, "data radial");

  const labelFormatter = (value) => {
    return `${value}%`;
  };

  return (
    <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={70}
      outerRadius={70}
      barSize={10}
      data={data}
      startAngle={90}
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <RadialBar
        minAngle={15}
        label={{
          position: "center",
          fill: "#282D30",
          formatter: labelFormatter
        }}
        clockWise
        cornerRadius={30 / 2}
        dataKey="todayScore"
        fill="#FF0000"
      />
      <text
        x={150}
        y={175}
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#74798C"
      >
        de votre objectif
      </text>
      <Legend
        iconSize={0}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
        fill="#FF0000"
        payload={[
          {
            value: "Score",
            type: "react",
            color: "#000000"
          }
        ]}
      />
    </RadialBarChart>
  );
}
