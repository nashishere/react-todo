/* @flow */

import {Action, applyMiddleware, combineReducers, compose, createStore, Middleware, Store} from "redux";

import {LoggerMiddleware} from "../middlewares";

import * as Todo from "./Todo";

export interface State {
  todo: Todo.State,
}

export const initialState: State = {
  todo: Todo.initialState,
};

const reducers = {
  todo: Todo.reducer,
};

export const reducer = (state: State = initialState, action: Action) => {
  return compose(combineReducers)(reducers)(state, action);
};

const middlewares: Array<Middleware> = [LoggerMiddleware];
const store: Store<State, Action> = createStore(reducer, applyMiddleware(...middlewares));

export {Todo};
export default store;
