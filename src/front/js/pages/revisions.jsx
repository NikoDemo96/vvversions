import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import VVVERSIONSLOGONEGRO from "../../img/VVVERSIONSLOGONEGRO.png";

export function Revisions() {
  const [divs, setDivs] = useState([]);
  const [project, setProject] = useState();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const [version, setVersion] = useState(0);
  console.log(version);

  const handleLogout = () => {
    const response = actions.logout();
    if (response) navigate("/");
  };

  const handleClick = () => {
    navigate(`/addsong/${params.id}`);
  };
  const goToSong = (songId) => {
    navigate(`/songrevision/${params.id}/${songId}`);
  };
  useEffect(() => {
    if (store.projects.length == 0) return;
    const project = store.projects.find((project) => params.id == project.id);
    console.log(project);
    setProject(project);
  }, [store.projects]);

  useEffect(() => {
    actions.cleanComments();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between p-5 mt-2">
        <div className="col-3">
          <Link to="/projectinput">
          <i className="fa-solid fa-backward text-black fs-4 mt-1"></i>
          </Link>
        </div>
        <div className="text-center col-6">
          <span className="text-dark">
            <h3><i>Revisions of {project && project.title}</i></h3>
          </span>
        </div>
        <div className="col-3 text-end fs-5">
          <button onClick={handleLogout} className="text-danger logouttitle">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className=" btn btn-outline-dark version fs-6 mt-3 text-end"
        >
          Add Revision{" "}
        </button>
      </div>
      <div>
        {project &&
          project.songs.map((song, index) => (
            <div className="container d-flex projectcontainer my-2 col-8 justify-content-between ">
              <div className="d-flex">
                <div>
                  {" "}
                  <img
                    src={song.cover_url}
                    className="projectimage ms-2"
                  ></img>{" "}
                </div>
                <div>
                  <div className="text-start">
                    <h2 className="projectname">{project.title} </h2>
                  </div>
                  <div>
                    <div className="text-start titlesong">Title Song </div>
                  </div>
                  <div className=""></div>
                </div>
              </div>
              <div className="text-end me-4">
                <div className="text-end date">
                  {" "}
                  <p>{song.version_date} </p>{" "}
                </div>
                <div className="version">
                  <p>
                    Version {project.version}.{index}{" "}
                  </p>
                </div>
                <div className="">
                  <div className="mt-1 text-end">
                    <button
                      type="button"
                      className="btn btn-outline-dark openbutton2"
                      onClick={() => goToSong(song.id)}
                    >
                      Go to song
                    </button>
                  </div>
                  <button
                    className="deleteproject2 text-danger"
                    onClick={() => actions.deleteSong(song.id)}
                  >
                    Delete song
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="d-flex mt-3">
        <div>
          <div className="text-center">
            <img src={VVVERSIONSLOGONEGRO} className="col-2 text-center"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
