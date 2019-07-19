import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RouteWithAuth } from './utils/router';
import { RoutePaths } from './constants';
import { List, Login } from './components/pages';

const AppRoutes = (): React.ReactElement => (
  <Switch>
    <RouteWithAuth path={RoutePaths.LIST} component={List} />
    <Route path={RoutePaths.LOGIN} component={Login} />

    {/* Redirection on 404 or some mismatch url */}
    <Redirect to={RoutePaths.LIST} />
  </Switch>
);

export default AppRoutes;
