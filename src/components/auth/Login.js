import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertsContext";
import AuthContext from "../../context/auth/AuthContext";

const Login = (props) => {
  const { alert, showAlerts } = useContext(AlertContext);
  const { message, authenticated, loginInit } = useContext(AuthContext);
  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlerts(message.msg, message.category);
    }
  }, [message]); //eslint-disable-line

  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim === "" || password.trim() === "") {
      showAlerts("All fields are required", "alerta-error");
    }

    loginInit({ email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category} `}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign in"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Create an account.
        </Link>
      </div>
    </div>
  );
};

export default Login;
