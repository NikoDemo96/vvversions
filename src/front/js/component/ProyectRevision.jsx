import React from "react";
import MusicPlayer from "./subcomponent/MusicPlayer.jsx";
import Comments from "./subcomponent/Comments.jsx";

const ProyectRevision = () => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <MusicPlayer />
      <Comments/>
    </div>
  );
};

export default ProyectRevision;
