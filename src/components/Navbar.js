/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Navbarmain() {
  let history = useHistory();

  return (
    <div>
      <Navbar className="navbar navbar-expand-lg  navbar-light  bg-dark mb-5 pt-3 pb-3">
        <Navbar.Brand className=" text-white mr-2">Projeto3</Navbar.Brand>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <ul className="navbar-nav ">
              <li className="nav-item active ">
                <Link className="nav-link text-white" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/menus/lista">
                  Criar Lista
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/menus/listas-salvas">
                  Listas Salvas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/menus/about">
                  Sobre os Criadores
                </Link>
              </li>

              <li className="nav-item  ">
                <button
                  className="btn btn-outline-success mt-1  "
                  onClick={() => {
                    localStorage.clear();

                    history.push("/");
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarmain;
