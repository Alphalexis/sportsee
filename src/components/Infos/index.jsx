import React from "react";
import "./Infos.css";

export default function Infos({ dataGraph, dataIcon, unit, typeAvg }) {

  return (
    <div className="divAvg">
      <img className="dataIcon" src={dataIcon} alt={dataIcon} />
      <div className="dataText">
      <p className="infoText">{dataGraph} {unit}</p>
      <p className="typeText">{typeAvg}</p>
      </div>
    </div>
  );
}
