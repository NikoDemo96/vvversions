import React, { Component } from "react";
import { Link } from "react-router-dom";
import cover1 from "../../img/cover1.jpg";
import cover2 from "../../img/cover2.jpg";
import cover3 from "../../img/cover3.jpg";
import cover4 from "../../img/cover4.png";
import cover5 from "../../img/cover5.webp";
import cover6 from "../../img/cover6.jpg";

export const Footer = () => (
  <footer className="d-flex justify-content-between align-items-center">
    <div className="ms-3">
      <img src={cover1} className="coveralbum"></img>
    
      <img src={cover2} className="coveralbum ms-1"></img>
    
      <img src={cover3} className="coveralbum ms-1"></img>

      <img src={cover4} className="coveralbum ms-1"></img>

      <img src={cover5} className="coveralbum ms-1"></img>

      <img src={cover6} className="coveralbum ms-1"></img>
    </div>
    <div><h3 className="mt-2">Do you really believe in your music?</h3></div>
    <div>
      <p className="aboutlink">
        <Link to="/about">About us</Link>
      </p>
    </div>
  </footer>
);
