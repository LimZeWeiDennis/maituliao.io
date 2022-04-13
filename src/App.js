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
