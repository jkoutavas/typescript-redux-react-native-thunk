import {createSelector} from 'reselect';

import {State} from '../type';

import {PageReducerState} from './reducer';

export function selectPageReducerState(state: State): PageReducerState {
  return state.pageReducer;
}

export const selectPageList = createSelector(
  selectPageReducerState,
  state => state.pageList,
);
