import "./Graphradial.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [

  {
    name: "unknow",
    uv: 40,
    pv: 80,
    fill: "#FBFBFB"
  },
    {
    name: "Score",
    uv: 10,
    pv: 80,
    fill: "#FF0000"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function App() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={70}
      outerRadius={90}
      barSize={10}
      data={data}
    startAngle={90}
    >
      <RadialBar
        minAngle={15}
        clockWise
        cornerRadius={30 / 2}
        dataKey="uv"
      />
      <Legend
        iconSize={0}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
