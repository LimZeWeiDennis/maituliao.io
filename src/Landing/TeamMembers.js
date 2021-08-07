import React from "react";

import './TeamMembers.css';


const TeamMembers = props => {

    return (
        <div className='mainBody' >
            <div className='textBox'>
                <h1 className="teamTitle"> Context</h1>
                <text className="mainText"> CS3240 Interaction Design</text>
                <text className="mainText"> Group Project</text>
                <text className="mainText"> January - April 2021 </text>
            </div>

            <div className='textBox'>
                <h1 className="teamTitle"> Team</h1>
                <text className="mainText"> Hay Yuxin</text>
                <text className="mainText"> Justin Gnoh Kit Peow</text>
                <text className="mainText"> Lai Wei Xian Clemence </text>
                <text className="mainText"> Lim Ze Wei Dennis</text>
                <text className="mainText"> Yuki Neo Wei Qian </text>
            </div>
        </div>
    )
}


export default TeamMembers;