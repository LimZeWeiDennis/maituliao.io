import logo from './logo.svg';
import LandingHeader from './Landing/LandingHeader';
import ContentBar from './ContentBar/ContentBar';
import Overview from "./Overview/Overview";

import './App.css';


const App = props => {

  return (
      <div>
          <LandingHeader/>
          <ContentBar/>
          <Overview/>

      </div>
  )
}

export default App;
