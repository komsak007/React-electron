import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
