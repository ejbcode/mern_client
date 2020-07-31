import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  const [user, setUser] = useState({});
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create an account</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign in"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Back to login page
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
