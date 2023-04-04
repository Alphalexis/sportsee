import "./Graphradar.css";
import React from "react";
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function App(dataGraph) {
  console.log(dataGraph, "dataGraph radar")

/**
React component for displaying a radar chart from the provided data.
@param {object} dataGraph - Data to display in the radar chart.
@param {object[]} dataGraph.data - Array of objects representing the data to display, each object containing keys 'kind' and 'value'.
@param {string} dataGraph.data.kind - Key representing the type of performance, which can be 'energy', 'cardio', 'endurance', 'strength', 'speed', or 'intensity'.
@param {number} dataGraph.data.value - Key representing the value of the performance.
@param {object} dataGraph.kind - Object representing a mapping between the performance types (keys) and their names (values).
@returns {JSX.Element} React component for displaying a radar chart from the provided data.
*/

 const getFormattedPerformances = () => {
    const rawPerf = dataGraph.dataGraph.data
    const kindPerf = dataGraph.dataGraph.kind
    const kindTranslate = {
      energy: 'Energie',
      cardio: 'Cardio',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }

    return rawPerf.map((perf) => {
      return { data: perf.value, kind: kindTranslate[kindPerf[perf.kind]] }
    })
  }

/**
Function for formatting the performance data for the radar chart.
@returns {object[]} Array of objects representing the formatted performance data for the radar chart, each object containing keys 'kind' and 'data'.
*/

  const data = getFormattedPerformances();
console.log(getFormattedPerformances(), "donnée formaté")

return (
  <RadarChart
    cx={200}
    cy={175}
    outerRadius={120}
    width={400}
    height={350}
    data={data}
    style={{ backgroundColor: "#282D30"}}
  >
    <PolarGrid stroke="#ffffff" />
    <PolarAngleAxis dataKey= "kind" stroke="#ffffff" axisLine={false} />
    <PolarRadiusAxis axisLine={false} tick={false} />
    <Radar
      name="Mike"
      dataKey="data"
      fill="#FF0000"
      fillOpacity={0.6}
    />
  </RadarChart>
);
  }

  App.propTypes = {
    dataGraph: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.oneOf(['energy', 'cardio', 'endurance', 'strength', 'speed', 'intensity']).isRequired,
        value: PropTypes.number.isRequired,
      })).isRequired,
      kind: PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
  };
  