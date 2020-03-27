import {Employee, StateModel} from './type';
import {Reducer} from 'redux';
import {AllActions, EReduxActionTypes} from './action';

// This module applies some of the material found in
// https://blog.usejournal.com/writing-better-reducers-with-react-and-typescript-3-4-30697b926ada

const initialState: StateModel = {
  pageList: [],
};

function updatePageList(state: StateModel, payload: Array<Employee>) {
  return <const>{
    ...state,
    pageList: payload,
  };
}
type Action = ReturnType<typeof updatePageList> | StateModel;

const pageReducer: Reducer<Action, AllActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case EReduxActionTypes.GET_PAGE_LIST:
      return updatePageList(state, action.payload);
    default:
      return state;
  }
};

export default pageReducer;
