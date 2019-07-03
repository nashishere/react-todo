/* @flow */

import {Action, Reducer} from "redux";
import {Moment} from "moment";

import type {ThreeStateBoolean} from "../../models/index";

export type State = {
  +tasks: Array<{
    +id: number,
    +title: string,
    +description?: string,
    +isComplete: ThreeStateBoolean,
    +createdAt: Moment,
    +updatedAt: Moment,
  }>,
};

export const initialState: State = {
  tasks: [],
};

export const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
