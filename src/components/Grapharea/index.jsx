import "./Grapharea.css";
import React from "react";
import PropTypes from 'prop-types';
import { AreaChart, XAxis, Tooltip, Area, Legend } from "recharts";

export default function App(dataGraph) {

/**
Graphic component representing an area chart.
@param {object} dataGraph - Data of the chart to display.
@param {Array.<{day: number, sessionLength: number}>} dataGraph.sessions - Data of the sessions to display.
@returns {JSX.Element} - Element of the area chart component.
*/

  const weekDays = ["", "L", "M", "M", "J", "V", "S", "D"];

  const formatWeekDay = (day) => {
    return weekDays[day];
  };

/**
Function for formatting the names of the weekdays.
@param {number} day - Number of the weekday.
@returns {string} - Formatted name of the weekday.
*/

  const style = {
    top: 20,
    left: 0,
    lineHeight: "24px"
  };
  
/**
Function for rendering the tooltip of the area chart.
@param {object} params - Parameters of the tooltip.
@param {boolean} params.active - Activation indicator of the tooltip.
@param {Array.<{value: string}>} params.payload - Data of the tooltip.
@param {string} params.label - Label name of the tooltip.
@returns {JSX.Element} - Element of the tooltip.
*/

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Session: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <AreaChart
      width={350}
      height={350}
      data={dataGraph.dataGraph.sessions}
      style={{ backgroundColor: "#FF0000" }}
    >
      <XAxis dataKey="day" tickFormatter={formatWeekDay} stroke="#ffffff" />

      <Tooltip content={renderTooltip}/>
      <Area
        type="monotone"
        dataKey="sessionLength"
        stroke="#ffffff"
        fill="#FF0000"
      />
      <Legend
              iconSize={0}
              width={340}
              height={3}
      wrapperStyle={style}
      payload={[
        {
          value: "Durée moyenne des sessions",
          type: "react",
          color: "#FF8080"
        }
      ]}
      />
    </AreaChart>
  );
}

App.propTypes = {
  dataGraph: PropTypes.shape({
  sessions: PropTypes.arrayOf(PropTypes.shape({
  day: PropTypes.number.isRequired,
  sessionLength: PropTypes.number.isRequired,
  })).isRequired,
  }).isRequired,
  };
