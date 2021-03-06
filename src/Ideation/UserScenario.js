import React from "react";
import "./Ideation.css";
import ExpandableImage from "../ExpandableImage/ExpandableImage";

const UserScenario = prop => {
  return (
    <div>
      <div className="flex-direction-row">
        <div style={{ width: '100%' }}>
          <h1 className="userScenarioTitle"> User Scenario {prop.id}: {prop.name} </h1>
          {prop.text}
        </div>
        <ExpandableImage src={prop.comicSrc} alt="" />
      </div>
      <div className="flex-direction-col">
        <img src={prop.userJourneyMapSrc} alt="" style={{ height: '1000px', width: '100%' }}></img>
        <p className="imageCaption">User Journey Map for {prop.name}</p>
      </div>
    </div>
  )
}

export default UserScenario;