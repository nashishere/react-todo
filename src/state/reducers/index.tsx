import { Action, applyMiddleware, combineReducers, compose, createStore, Middleware, Store } from 'redux';

import { LoggerMiddleware } from '../middlewares';
import * as Todo from './Todo';

export interface State {
  todo: Todo.State;
}

export const initialState: State = {
  todo: Todo.initialState,
};

const reducers = {
  todo: Todo.reducer,
};

// TODO Check if the return type is correct
export const reducer = (state: State = initialState, action: Action): State => {
  return compose(combineReducers)(reducers)(state, action);
};

const middlewares: Middleware[] = [LoggerMiddleware];
const store: Store<State, Action> = createStore(reducer, applyMiddleware(...middlewares));

export { Todo };
export default store;
