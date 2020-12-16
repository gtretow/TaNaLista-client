import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center midpage">
      <h1 className="text-danger ">Lista de Compras</h1>
      <p className="text-danger "> This is the homepage</p>
      <div className="d-flex flex-column align-items-center ">
        <Link className="btn btn-lg btn-primary login  " to="/auth/login">
          Conectar-se
        </Link>

        <Link className="btn btn-lg btn-primary m-3 login  " to="/auth/signup">
          Criar Conta
        </Link>
        <Link className="btn btn-lg btn-primary login" to="/menus/lista">
          Criar Lista
        </Link>
      </div>
    </Container>
  );
}

export default Home;
