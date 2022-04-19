import React from "react";

import mainSplashScreen from '../assets/mainSplashScreen.png';

import './LandingHeader.css';
import './TeamMembers'

import TeamMembers from "./TeamMembers";
import ExpandableImage from "../ExpandableImage/ExpandableImage";



const LandingHeader = props => {

    return (
        <div>
            <div className='header' >
                <ExpandableImage src={mainSplashScreen} alt="" />
                <div className='title'>
                    <h1 className="appTitle"> maituliao.io </h1>
                    <div className="appSubtitle"> CS3240 Group 9</div>
                </div>
            </div>

            <TeamMembers />


        </div>


    )
}


export default LandingHeader;