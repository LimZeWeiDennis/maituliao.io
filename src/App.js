import React from 'react';

import LandingHeader from './Landing/LandingHeader';
import ContentBar from './ContentBar/ContentBar';
import Overview from "./Overview/Overview";
import UserResearch from "./UserResearch/UserResearch";
import Ideation from "./Ideation/Ideation";
import Prototyping from './Prototyping/Prototyping';
import Testing from './Testing/Testing';
import FinalProduct from './FinalProduct/FinalProduct';

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
          <Prototyping />
          <Testing />
          <FinalProduct />

      </div>
  )
}

export default App;
