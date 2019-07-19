import * as React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from './state/reducers';
import AppRoutes from './App.Routes';
import { Header } from './components/parts';

import './App.scss';

const history = createBrowserHistory();

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Fragment>
          <Header />
          <AppRoutes />
        </React.Fragment>
      </Router>
    </Provider>
  );
}
