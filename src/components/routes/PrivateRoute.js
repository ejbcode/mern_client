import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { authenticated, userAuth } = useContext(AuthContext);
  useEffect(() => {
    userAuth();
  }, []); //eslint-disable-line

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
