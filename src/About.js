import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.png";
const Research = (props) => {

    return (
        <>
           <div className="my-5">
                <h1 className="text-center">Research Projects</h1>
            </div>
            <div className="container-fluid ">
            <div className="col-12 mx-auto">
                <div className="row" style={{display:'flex'}}>
                    <div className="col-3 " >
                       <h5><center>Bridging the gap between video conferencing and humanoid robots.</center></h5>
                    <div class="cat">
                 <img src="https://lh6.googleusercontent.com/7ysUWI6x7kADBN-JtrE30I3NfLukLz0CDoPGX30ixh2_xywZHjQtnXPyHZb4kqpbBDWjuMS5B32VxEzOTpg_gvjfBX1L8gm5e-3nhrNdJZB8TOJD=w1280" width="300" height="300" class="cat" alt="/about" />
                     </div>
                        <br></br>
                        
                    </div>
                    

                </div>

</div>
                <div className="col-10 mx-auto">
                    <div className="row">
                      
                                
                                    
                                    <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}>
Telerobots provide new heights of remote communication  beyond video conferencing by allowing movement of a robot in the local space. However, a large part of communication lies beyond voice and facial expressions. 
We set out to enhance telerobotic video conferencing by making a robotic arm-and-hand manipulator which can be implemented on existing telerobot platforms! The manipulator, which replicates a remote user's arm motion, is capable of tangible interactions, expressive gestures, and physical referencing which are three of the primary social behaviors missing in the current telepresence experience. 
Put simply, we want to allow a remote worker to use more of their natural body language for communication and social connectedness.</span>
                                

                    </div>


                </div>
                <br></br>

 <div class="cat">
                 <img src="https://lh3.googleusercontent.com/9mdvdHqkoBwg-4l7ZwEpXOPvCIe1TmQM7j9aAynOew3xUTrPo1OxYOpq-_bVokoQVwsIOkYaR_TUOIuNzoR4xvrknnB-d_vtlBocKL5umcNJbryB=w1280" width="300" height="300" class="cat" alt="/about" />
                     </div>
            </div>
<br></br>
            <span style={{ fontSize: '11pt', verticalAlign: 'baseline' }}>
The novelty in this work is the robust nature of the manipulator which allows for more natural tangible interactions combined with a motion tracking control system which enables more subconscious gesture replication.  
We have implemented several iterations of the manipulator onto the Anybots QB 2.0 platform with a custom control system, and are working towards shared control  to further enhance realistic human-robot interactions.
 Check out our pictures, videos, and publications for more!</span>

        </>
    );
};

export default Research;