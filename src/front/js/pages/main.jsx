import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import MusicPlayer from "../component/subcomponent/MusicPlayer.jsx";
import ProyectRevision from "../component/ProyectRevision.jsx";
import { useNavigate } from "react-router-dom";



export const Main = () => {
  const { store } = useContext(Context);
const navigate = useNavigate()

useEffect(() => {
  if( store.token == null ) navigate("/")
}, [store.token])


  return (
    <div className="p-5">
      <h1>{store.artistName}</h1>
      <h1>{store.username}</h1>
      <div className="container sticky-top"></div>
    </div>
  );
};
