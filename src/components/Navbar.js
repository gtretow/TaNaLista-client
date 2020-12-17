/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../apis/api";

function Navbarmain() {
  let history = useHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchuser() {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/profile`
        );
        setUser(response.data.user.name);
      } catch (err) {
        console.error(err);
      }
    }
    fetchuser();
  }, []);

  return (
    <Navbar
      fixed="top"
      bg="dark"
      expand="lg"
      className="mb-5 py-3 navbar-light"
    >
      <Navbar.Brand
        as={Link}
        to="/menus/listas-salvas"
        className="text-white mr-2"
      >
        TaNaLista!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/menus/conta" className="active text-white">
          Minha Conta
        </Nav.Link>
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
          <p className="active text-white mr-3">
            Olá{" "}
            {user.split(" ")[0].slice(0, 1).toUpperCase() +
              user.split(" ")[0].slice(1).toLowerCase()}
            !
          </p>
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
