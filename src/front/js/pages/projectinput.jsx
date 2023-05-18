import React, { useState, useContext } from "react";
import addimage from "../../img/addimage.png";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import VVVERSIONSLOGONEGROMOBILE from "../../img/VVVERSIONSLOGONEGROMOBILE.png";

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
      <div className="text-end me-2 mt-3">
          <button
            onClick={handleLogout}
            className="logouttitle text-danger me-4"
          >
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      <div className="text-end">
        <div className="">
          <Link to="/">
            <img src={VVVERSIONSLOGONEGROMOBILE} className="back2"></img>
          </Link>
        </div>
        <div className="col-12 text-center">
          <h1>{store.artistName}</h1>
        </div>
        
      </div>
      <div className="my-3 text-center">
        <input
          type="text"
          placeholder="    name"
          value={inputValue}
          onChange={handleInputChange}
          className="placeholder2 me-2"
        />
        <button className="btn version" onClick={addProject}>
          add a project
        </button>
        {store.projects.map((project, index) => (
          <div className="container d-flex projectcontainer my-1 col-8 justify-content-between">
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
                  <div className="text-start titlesong">title song</div>
                </div>
                <div className="">
                  <div className="text-start mt-5">
                    <button onClick={() => actions.createVersion(project.id)} type="button" className="newversion p-2 text-white my-1">
                      new version
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
                <p>version {project.version} </p>
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
                        add files
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
                      open revisions
                    </button>
                  </div>
                )}

                <button
                  className="deleteproject text-danger"
                  onClick={() => actions.deleteProject(project.id)}
                >
                  delete project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
