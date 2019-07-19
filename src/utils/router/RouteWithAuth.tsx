import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouteWithAuth = ({ component: OriginalComponent, ...rest }): React.ReactElement => {
  // TODO Add authentication control here
  const authenticated = true;

  // TODO Prettify here
  return (
    <Route
      {...rest}
      render={(props): React.ReactElement =>
        authenticated ? (
          <OriginalComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default RouteWithAuth;
