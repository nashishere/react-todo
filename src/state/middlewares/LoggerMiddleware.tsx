import { Middleware } from 'redux';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
const LoggerMiddleware: Middleware = store => next => action => {
  // TODO Needs to be implemented
  return next(action);
};

export default LoggerMiddleware;
