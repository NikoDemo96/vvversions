import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import VVVERSIONSLOGOBLANCO from "../../img/VVVERSIONSLOGOBLANCO.png";

export const Navbar = () => {
  const location = useLocation();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    const response = actions.logout();
    if (response) navigate("/");
  };
  return (
    <div className="bg-white">
      <nav
        className="navbar navbarhome">
        <div className="d-flex">
          <div className="p-1 ms-3">
            <Link to="/">
              <img
                src={VVVERSIONSLOGOBLANCO}
                className="col-3 ms-3 navbar-brand mb-0 h1"
              ></img>
            </Link>
          </div>
          <div className="ml-auto d-flex me-5 mt-5 col-2 justify-content-between">
            <Link to="/register">
              <button className="botonregister text-white ">Register</button>
            </Link>
            <Link to="/user/login">
              <button className="botonlogin text-white">Sign In</button>
            </Link>
            <div>
              <button
                onClick={handleLogout}
                className="bg-black botonlogout text-danger ">
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
