import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center ">
      <h1>Lista de Compras</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center m-3">
        <Link className="btn btn-lg btn-primary" to="/auth/Login">
          Login Here
        </Link>
      </div>
      <Link className="btn btn-lg btn-primary m-3" to="/auth/Signup">
        Signup Here
      </Link>
      <Link className="btn btn-lg btn-primary m-3" to="/lista">
        Create List
      </Link>
    </div>
  );
}

export default Home;
