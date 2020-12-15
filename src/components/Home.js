import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center ">
      <h1>Lista de Compras</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center m-3">
        <Link className="btn btn-lg btn-primary" to="/auth/login">
          Acessar Listas
        </Link>
      </div>
      <Link className="btn btn-lg btn-primary m-3" to="/auth/signup">
        Registrar
      </Link>
      <Link className="btn btn-lg btn-primary m-3" to="/menus/lista">
        Criar Lista
      </Link>
    </Container>
  );
}

export default Home;
