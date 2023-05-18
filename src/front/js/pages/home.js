import React, { useContext } from "react";
import benHarper from "../../img/benharper1.jpg";
import "../../styles/home.css";
import { Footer } from "../component/footer";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <div className="button-container col-12">      
        <img
          src={benHarper}
          alt="..."
          className="bg-dark col-12"
        ></img>
       <Link to="/register"> sign up now!</Link>
      </div>   
      <Footer />
    </div>
  );
};
