import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <div className="container  d-flex about "> 
            
            <div className="ms-3 mt-5"><h1>About me</h1></div>
            
            
            </div>
            <div className=""><Link to="/"><i className=" fa-solid fa-angles-left text-dark fs-6 p-3 ms-5">BACK</i></Link></div>

        </div>
    )
};