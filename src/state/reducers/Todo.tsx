import { Action, Reducer } from 'redux';
import { Moment } from 'moment';

import { ThreeStateBoolean } from '../../models';

export interface State {
  tasks: {
    id: number;
    title: string;
    description?: string;
    isComplete: ThreeStateBoolean;
    createdAt: Moment;
    updatedAt: Moment;
  }[];
}

export const initialState: State = {
  tasks: [],
};

export const reducer: Reducer<State, Action> = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
