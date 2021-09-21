import { combineReducers, Reducer } from 'redux';

import { Actions, State } from './type';
import { reducer as pageReducer } from './pageReducer';

export const reducer: Reducer<State, Actions> = combineReducers({ pageReducer });
