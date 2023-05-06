import React, { useContext } from "react";
import { Context } from "../store/appContext";
import MusicPlayer from "../component/subcomponent/MusicPlayer.jsx";
import ProyectRevision from "../component/ProyectRevision.jsx";

export const Main = () => {
  const { store } = useContext(Context);
  return (
    <div className="p-5">
      <ProyectRevision />
      <h1>{store.artistName}</h1>
      <div className="container sticky-top">
        
      </div>
    </div>
  );
};
