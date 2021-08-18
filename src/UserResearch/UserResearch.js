import React from "react";
import "./UserResearch.css";
import UserResearchContent from "./UserResearchContent";

const UserResearch = props => {

    return (
        <div>
            <div className='researchHeader' >
                <h1 className="researchTitle"> User Research </h1>
            </div>
            <UserResearchContent/>
        </div>

    )
}


export default UserResearch;