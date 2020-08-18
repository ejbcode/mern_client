import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";

const TopRow = () => {
  const { user, userAuth, logOut } = useContext(AuthContext);
  useEffect(() => {
    userAuth();
  }, []); //eslint-disable-line

  const handleClick = () => {
    logOut();
  };

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={handleClick}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default TopRow;
