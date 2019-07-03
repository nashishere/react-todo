/* @flow */

import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {RouteWithAuth} from "./utils/router";
import {List, Login} from "./components/pages";

const AppRoutes = () => (
  <Switch>
    <RouteWithAuth path="/list" component={List} />
    <Route path="/login" component={Login} />

    {/* Redirection on 404 or some mismatch url */}
    <Redirect to="/list" />
  </Switch>
);

export default AppRoutes;