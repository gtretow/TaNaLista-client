/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Projeto3
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              Criar Lista
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Histórico
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Sobre os Criadores
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
