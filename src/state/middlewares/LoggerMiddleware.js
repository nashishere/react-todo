/* @flow */

import {Middleware} from "redux";

const LoggerMiddleware: Middleware = store => next => (action) => {
  // TODO Needs to be implemented
  return next(action);
};

export default LoggerMiddleware;
