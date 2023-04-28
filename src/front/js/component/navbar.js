import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-color">
      <div className="container">
        <a className="navbar-brand me-2" href="https://mdbgo.com/"></a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                VVVersion
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              className="btn btn-success px-3 me-2"
            >
              Login
            </button>
            <button type="button" className="btn btn-primary me-3">
              Sign up
            </button>
            <a
              className="btn btn-dark px-3"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
