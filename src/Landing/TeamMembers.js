import React from "react";

import './TeamMembers.css';


const TeamMembers = props => {

    return (
        <div className='mainBody' >
            <div className='textBox'>
                <h1 className="teamTitle"> Context</h1>
                <div className="mainText"> CS3240 Interaction Design</div>
                <div className="mainText"> Group Project</div>
                <div className="mainText"> January - April 2021 </div>
            </div>

            <div className='textBox'>
                <h1 className="teamTitle"> Team</h1>
                <div className="mainText"> Hay Yuxin</div>
                <div className="mainText"> Justin Gnoh Kit Peow</div>
                <div className="mainText"> Lai Wei Xian Clemence </div>
                <div className="mainText"> Lim Ze Wei Dennis</div>
                <div className="mainText"> Yuki Neo Wei Qian </div>
            </div>
        </div>
    )
}


export default TeamMembers;