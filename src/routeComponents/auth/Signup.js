import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="">
      <form
        className="container   w-25 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center ">Signup!</h1>

        <div className="text-center form-group">
          <label htmlFor="signupFormName">Full Name</label>
          <input
            className="form-control"
            placeholder="Name "
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />
        </div>

        <div className="text-center form-group">
          <label htmlFor="signupFormEmail">E-mail Address</label>
          <input
            placeholder="E-maill"
            className="form-control"
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
            placeholder="Password"
            className="form-control"
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
            Signup!
          </button>
        </div>
        <div className="text-center form-group">
          <Link to="/auth/login">
            Already have an account? Click here to login.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
