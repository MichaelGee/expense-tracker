import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "./context/globalState";

function ProtectedRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (!!currentUser) {
          return <RouteComponent {...routeProps} />;
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
