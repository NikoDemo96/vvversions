import React from "react";
import { Link } from "react-router-dom";
import VVVERSIONSLOGONEGROMOBILE from "../../img/VVVERSIONSLOGONEGROMOBILE.png";

export const About = () => {
    return (
        <div>
            <div className="container  d-flex about "> 
            <div className="ms-3 mt-5 aboutme"><h1 className="aboutmetxt">About me</h1></div>           
            </div>
            <div className=""><Link to="/"><img src={VVVERSIONSLOGONEGROMOBILE} className="back2 p-2"></img></Link></div>

        </div>
    )
};