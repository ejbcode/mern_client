import React from "react";

const TopRow = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>User</span>
      </p>
      <nav className="nav-principal">
        <a href="#">Logout</a>
      </nav>
    </header>
  );
};

export default TopRow;
