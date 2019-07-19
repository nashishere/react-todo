import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function RouteWithAuth({ component: OriginalComponent, ...rest }): React.ReactElement {
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
}
