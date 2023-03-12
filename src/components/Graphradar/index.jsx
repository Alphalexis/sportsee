import "./Graphradar.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function App() {
    return (
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
      //  data={data}
      >
      <PolarGrid stroke="#FFFFFF" />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="Mike"
        dataKey="A"
        fill="#FF0000"
        fillOpacity={0.6}
      />
    </RadarChart>
    );
  }
  