import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RouteWithAuth } from './utils/router';
import { RoutePaths } from './constants';
import { List, Login } from './components/pages';

export default function AppRoutes(): React.ReactElement {
  return (
    <Switch>
      <RouteWithAuth path={RoutePaths.LIST} component={List} />
      <Route path={RoutePaths.LOGIN} component={Login} />

      {/* Redirection on 404 or some mismatch url */}
      <Redirect to={RoutePaths.LIST} />
    </Switch>
  );
}
