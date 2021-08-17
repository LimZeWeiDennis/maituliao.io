import React, {Fragment, useEffect, useState, useRef} from "react";
import {InView, useInView} from 'react-intersection-observer';

import mainSplashScreen from '../assets/mainSplashScreen.png';

import './LandingHeader.css';
import './TeamMembers'

import TeamMembers from "./TeamMembers";
import ContentBar from '../ContentBar/ContentBar';


const LandingHeader = props => {

    return (
        <div>
            <ContentBar />
            <TeamMembers />
            <div className='header' >
                <img src={mainSplashScreen} className='img'/>
                <div className='title'>
                    <h1 className="appTitle"> maituliao.io </h1>
                    <text className="appSubtitle"> CS3240 Group 9</text>
                </div>

            </div>


        </div>


    )
}


export default LandingHeader;