/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Navbarmain() {
  let history = useHistory();

  return (
    <Navbar
      fixed="top"
      bg="dark"
      expand="lg"
      className="mb-5 py-3 navbar-light"
    >
      <Navbar.Brand as={Link} to="/" className="text-white mr-2">
        Projeto3
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/menus/lista" className="active text-white">
          Criar Lista
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/menus/listas-salvas"
          className="active text-white"
        >
          Listas Salvas
        </Nav.Link>
        <Nav.Link as={Link} to="/menus/about" className="active text-white">
          Sobre
        </Nav.Link>
        <Nav className="ml-auto ">
          <Button
            className="custom-btn"
          
            onClick={() => {
              localStorage.clear();

              history.push("/");
            }}
          >
            Sair
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarmain;
