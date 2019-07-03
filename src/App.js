/* @flow */

import * as React from "react";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {withTranslation} from "react-i18next";
import {createBrowserHistory} from "history";

import store from "./state/reducers";

import AppRoutes from "./App.Routes";

import "./App.scss";

const history = createBrowserHistory();

const AppComponent = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

const App = withTranslation()(AppComponent);

export default App;
