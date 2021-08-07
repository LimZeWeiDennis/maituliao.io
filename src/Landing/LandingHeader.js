import React from "react";
import mainSplashScreen from '../assets/mainSplashScreen.png';

import './LandingHeader.css';
import './TeamMembers'
import TeamMembers from "./TeamMembers";


const LandingHeader = props => {

    return (
        <div>
            <div className='header' >
                <img src={mainSplashScreen} className='img'/>
                <div className='title'>
                    <h1 className="appTitle"> maituliao.io </h1>
                    <text className="appSubtitle"> CS3240 Group 9</text>
                </div>

            </div>
            <TeamMembers/>
        </div>


    )
}


export default LandingHeader;