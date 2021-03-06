import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import { Container } from "react-bootstrap";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [pswMsg, setPswMsg] = useState("");

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/menus/lista");
    } catch (err) {
      setPswMsg(err.response.data.msg);
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <Container>
      <div>
        <form
          className="mt-3 container  align-items-center  w-50 midpage"
          onSubmit={handleSubmit}
        >
          <h1 className=" px-4 text-center">
            Conectar-se
          </h1>

          <div className="text-center form-group">
            <input
              className="form-control login inputcolor text-center"
              placeholder="E-mail"
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="text-center form-group">
            <input
              className="form-control login inputcolor text-center"
              placeholder="Password"
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>
          {pswMsg.length > 0 ? (
            <div className="bghistory3 bghistory2 grafic pt-2 mb-4 ">
              <p>{pswMsg}</p>
            </div>
          ) : (
            <></>
          )}

          <div className="text-center form-group">
            <button className="btn btn-dark login" type="submit">
              Conectar-se!
            </button>
          </div>

          <div className="text-center form-group ">
            <Link className="btn btn-dark login" to="/auth/signup">
              Não tem uma conta? Clique aqui para registrar-se!
            </Link>
          </div>
          <div className="mt-5">.</div>
        </form>
      </div>
    </Container>
  );
}

export default Login;
