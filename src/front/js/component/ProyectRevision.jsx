import React from "react";
import MusicPlayer from "./subcomponent/MusicPlayer.jsx";
import CommentBox from "./subcomponent/CommentBox.jsx";

const ProyectRevision = () => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <MusicPlayer />
      <CommentBox />
    </div>
  );
};

export default ProyectRevision;
