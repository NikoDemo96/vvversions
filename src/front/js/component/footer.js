import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="d-flex justify-content-between align-items-center">
    <div className="ms-4">
      <h1 className="mt-2 ms-2">VVVERSIONS</h1>
    </div>
    <div>
      <p className="fs-6 mt-2 me-5">
        <Link to="/about">about us</Link>
      </p>
    </div>
  </footer>
);
