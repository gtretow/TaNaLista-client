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
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/menus/lista");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <Container>
      <div className="">
        <form
          className=" container  align-items-center  w-75 "
          onSubmit={handleSubmit}
        >
          <h1 className="text-center   ">Login</h1>

          <div className="text-center form-group">
            <label htmlFor="signupFormEmail">E-mail Address</label>
            <input
              className="form-control login "
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
            <label htmlFor="signupFormPassword">Password</label>
            <input
              className="form-control login"
              placeholder="Password"
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <div className="text-center form-group">
            <button className="btn btn-primary" type="submit">
              Login!
            </button>
          </div>

          <div className="text-center form-group">
            <Link to="/auth/signup">
              Don't have an account? Click here to signup!
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Login;
