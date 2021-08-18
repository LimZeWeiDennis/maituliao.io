import React from "react";
import "./Overview.css";
import OverviewContent from "./OverviewContent";

const Overview = props => {

    return (
        <div>
            <div className='overviewHeader' >
                    <h1 className="overviewTitle"> Overview </h1>
            </div>
            <OverviewContent/>
        </div>


    )
}


export default Overview;