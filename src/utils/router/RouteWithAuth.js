/* @flow */

import * as React from "react";
import {Redirect, Route} from "react-router-dom";

const RouteWithAuth = ({ component: OriginalComponent, ...rest }) => {
  // TODO Add authentication control here
  const authenticated: boolean = true;

  return (
    <Route {...rest} render={props => (authenticated ? (
      <OriginalComponent {...props} />
      ) : (
        <Redirect to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}
        />
      ))}
    />
  );
};

export default RouteWithAuth;
