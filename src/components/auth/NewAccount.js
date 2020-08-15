import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertsContext";
import AuthContext from "../../context/auth/AuthContext";

const NewAccount = (props) => {
  const { alert, showAlerts } = useContext(AlertContext);
  const { message, authenticated, singupUser } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlerts(message.msg, message.category);
    }
  }, [authenticated, message, props.history, showAlerts]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const { name, email, password, confirm } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      return showAlerts("All field are required", "alerta-error");
    }

    if (password.length < 6) {
      showAlerts("password must be at least 5 characters", "alerta-error");
      return;
    }

    if (password !== confirm) {
      showAlerts(
        "Your password/confirm password fields do not match",
        "alerta-error"
      );
      return;
    }

    singupUser({ name, email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category} `}>{alert.msg}</div>
      ) : null}
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
