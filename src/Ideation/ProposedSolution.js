import React from "react";
import "./Ideation.css";
import UserScenario from "./UserScenario";

import mainSplashScreen from '../assets/mainSplashScreen.png';

const ProposedSolution = props => {
  
  const proposedSolutionText = (
    <p className='contentText proposedSolutionBody'>
      With the ideas generated during the brainstorming session, we <b>identified</b> that our ideas 
      were centred around utilizing a <b>mobile web application</b> that has various features to optimize 
      the shopping productivity of a shopper. We want users to be <b>able to have access to our application</b> 
      regardless of their location, we designed our solution to be based on a mobile web application.
      <br /><br />
      This also fits our target audience, who are <b>students and working adults</b> (twenties to forties) who 
      are considered to be <b>tech-savvy</b> and <b>familiar</b> with the usage of mobile phones.
      <br /><br />
      Using the <b>user personas</b>, our team created a user journey map and a user scenario, on how the 
      features of our solution can cater to the key user tasks generated.
    </p>
  )
  
  const trevonUserScenario = (
    <p className='contentText proposedSolutionBody'>
      Trevon wants to go to a new shopping mall with his friends. Being an <b></b> grocery shopper, 
      Trevon felt <b>confused</b> searching for the things he needs. So he opens up our mobile web application to 
      find his way around the supermarket. The application shows <b>the aisles’ location</b> for each item on the map. 
      Trevon <b>enters his list</b> of items and these were marked onto the map. He was able to find all his needed 
      items without his friends’ help. He proceeds to checkout and his shopping process is completed with ease.
    </p>
  )
  const rachelUserScenario = (
    <p className='contentText proposedSolutionBody'>
      Rachel is an <b>experienced</b> grocery shopper and she always shops for her grocery goods every day after work. 
      After finishing her lunch, she just remembered that she only has <b>30 minutes left</b> to buy the items needed 
      for her company’s event. She uses our mobile web application and <b>key in the necessary items</b> into her shopping 
      list page. Her shopping list will automatically <b>sort the different types of sub-lists by priority levels</b>. 
      With every item taken, she will check it off the list, and the item will be re-sorted again. Thanks to 
      this application, Rachel managed to get back to work on time.
    </p>
  )
  const secondTrevonUserScenario = (
    <p className='contentText proposedSolutionBody'>
      Trevon has just finished his exams and wants to buy Haagen Daaz ice cream with his friends to celebrate. 
      He rushed down to the supermarket to purchase, only to realise that there is an ongoing promotion for 
      Haagen Daaz that he was unaware of. The only one left was Pistachio which Trevon is allergic to. 
      Trevon decided to use our application and <b>check for other supermarket locations</b>, as such, Clementi’s 
      supermarket has many tubs of Rum & Raisin.
    </p>
  )
  return (
    <div>
      <div className="flex-direction-row">
        {/* Replace image with correct image */}
        <img src={mainSplashScreen} alt="" style={{height: '500px', width: '100%'}}></img>
        <div style={{ width: '100%' }}>
          <h1 className="proposedSolutionTitle"> Proposed Solution </h1>
          {proposedSolutionText}
        </div>
      </div>
      {/* Replace image with correct image for each User Scenario */}
      <UserScenario 
        id='1' 
        name='Trevon' 
        text={trevonUserScenario}
        comicSrc={mainSplashScreen}
        userJourneyMapSrc={mainSplashScreen}/>
      <UserScenario 
        id='2' 
        name='Rachel' 
        text={rachelUserScenario}
        comicSrc={mainSplashScreen}
        userJourneyMapSrc={mainSplashScreen}/>
      <UserScenario 
        id='3' 
        name='Trevon' 
        text={secondTrevonUserScenario}
        comicSrc={mainSplashScreen}
        userJourneyMapSrc={mainSplashScreen}/>
    </div>
  )
}

export default ProposedSolution;