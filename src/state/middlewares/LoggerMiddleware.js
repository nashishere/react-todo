/* @flow */

import {Middleware} from "redux";

// eslint-disable-next-line no-unused-vars
const LoggerMiddleware: Middleware = store => next => (action) => {
  // TODO Needs to be implemented
  return next(action);
};

export default LoggerMiddleware;
