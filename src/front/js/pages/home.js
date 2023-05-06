import React, { useContext } from "react";
import { Context } from "../store/appContext";
import benHarper from "../../img/benharper1.jpg";
import "../../styles/home.css";
import { Footer } from "../component/footer";

export const Home = () => {
  return (
    <div>
      <div className="">
        <img
          src={benHarper}
          alt="..."
          className="bg-dark col-12"
        ></img>
         <Footer />
      </div>
      
    </div>
  );
};
