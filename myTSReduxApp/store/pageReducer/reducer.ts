import {Actions} from '../type';

import {ActionTypes} from './action';
import {Employee} from './type';

export type PageReducerState = {
  pageList: Array<Employee>;
};
const initialState: Readonly<PageReducerState> = {pageList: []};

export function reducer(
  state: PageReducerState = initialState,
  action: Actions,
): PageReducerState {
  switch (action.type) {
    case ActionTypes.GET_PAGE_LIST: {
      return {pageList: action.payload};
    }
    default:
      return state;
  }
}
