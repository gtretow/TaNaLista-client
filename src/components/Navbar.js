/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
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
      className="mb-5 py-2 navbar-light"
    >
      <Navbar.Brand
        as={Link}
        to="/menus/listas-salvas"
        className="text-white mr-2"
      >
        <p>TaNaLista !</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/menus/conta" className="active text-white">
          <p> Minha Conta</p>
        </Nav.Link>
        <Nav.Link as={Link} to="/menus/lista" className="active text-white">
          <p>Criar Lista</p>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/menus/listas-salvas"
          className="active text-white"
        >
          <p>Listas Salvas</p>
        </Nav.Link>
        <Nav.Link as={Link} to="/menus/about" className="active text-white">
          <p>Sobre</p>
        </Nav.Link>

        <Nav className="pl-5 col-md-2 ml-auto  ">
          <p className="pr-1  active text-white mr-4">
            Olá{" "}
            {user.split(" ")[0].slice(0, 1).toUpperCase() +
              user.split(" ")[0].slice(1).toLowerCase()}
            !
          </p>

          <div>
            <button
              className="custom-btn  "
              onClick={() => {
                localStorage.clear();

                history.push("/");
              }}
            >
              Sair
            </button>{" "}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarmain;
