import React, { useRef, useEffect } from 'react';

import LandingHeader from './Landing/LandingHeader';
import ContentBar from './ContentBar/ContentBar';
import Overview from "./Overview/Overview";
import UserResearch from "./UserResearch/UserResearch";
import Ideation from "./Ideation/Ideation";

import './App.css';



const App = props => {

    // const overviewRef = useRef(null);
    //
    // const useMountEffect = fun => useEffect(fun, [overviewRef.current]);
    //
    // const scrollToOverView = () => document.getElementById('overview').scrollIntoView({ block: 'end', behavior: 'smooth' });
    //
    // useMountEffect(scrollToOverView)

  return (


      <div>
          <LandingHeader/>
          <ContentBar />
          <Overview />
          <UserResearch/>
          <Ideation/>

      </div>
  )
}

export default App;
