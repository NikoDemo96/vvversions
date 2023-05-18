import React, { useState, useContext } from "react";
import addimage from "../../img/addimage.png";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import VVVERSIONSLOGONEGRO from "../../img/VVVERSIONSLOGONEGRO.png";

export const ProjectInput = () => {
  const [projects, setProjects] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    const response = actions.logout();
    if (response) navigate("/");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addProject = () => {
    if (inputValue.trim() !== "") {
      //setProjects([...projects, inputValue]);
      actions.createProject({ title: inputValue });
      setInputValue("");
    }
  };
  // const removeProject = (index) => {
  //   setProjects(projects.filter((_, i) => i !== index));
  // };

  const handleClick = (id) => {
    navigate(`/revisions/${id}`);
  };

  return (
    <div>
      <div className="d-flex mt-2 p-5">
        <div className="">
          <Link to="/">
            <img src={VVVERSIONSLOGONEGRO} className="col-4 "></img>
          </Link>
        </div>
        <div className="col-6 text-end mt-3 fs-4">
          <p><i>{store.artistName}</i></p>
        </div>
        <div className="col-1 text-center mt-3  fs-5">
          <button
            onClick={handleLogout}
            className="logouttitle text-danger">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="    Name"
          value={inputValue}
          onChange={handleInputChange}
          className="placeholder2 me-2"
        />
        <button className="btn version" onClick={addProject}>
          Add a project
        </button>
        {store.projects.map((project, index) => (
          <div className="container d-flex projectcontainer my-2 col-8 justify-content-between">
            <div className="d-flex">
              <div className="">
                <img
                  src={
                    project.songs.length > 0
                      ? project.songs[project.songs.length - 1].cover_url
                      : addimage
                  }
                  className="projectimage ms-2"
                ></img>
              </div>
              <div>
                <div className="text-start">
                  <h2 className="projectname">{project.title} </h2>
                </div>
                <div>
                  <div className="text-start titlesong">Title Project</div>
                </div>
                <div className="">
                  <div className="text-start mt-5">
                    <button onClick={() => actions.createVersion(project.id)} type="button" className="newversion p-2 text-white my-1">
                      New Version
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end me-4">
              <div className="text-end date">
                {" "}
                <p>{project.version_date}</p>{" "}
              </div>
              <div className="version ">
                <p>Version {project.version} </p>
              </div>
              <div>
                {project.songs.length == 0 ? (
                  <Link to={`/addsong/${project.id}`}>
                    {" "}
                    <div className="mt-1">
                      <button
                        type="button"
                        className="addfiles btn btn-outline-dark"
                      >
                        Add Files
                      </button>
                    </div>{" "}
                  </Link>
                ) : (
                  <div className="mt-1 text-end">
                    <button
                      type="button"
                      className="btn btn-outline-dark openbutton"
                      onClick={() => handleClick(project.id)}
                    >
                      Open Revisions
                    </button>
                  </div>
                )}

                <button
                  className="deleteproject text-danger"
                  onClick={() => actions.deleteProject(project.id)}
                >
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
