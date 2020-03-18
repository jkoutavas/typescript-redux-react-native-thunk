import {
  EReduxActionTypes,
  IEmployee,
  IStateModel,
  AllActions,
} from '../constants';
import {Reducer} from 'redux';

// This module applies some of the material found in
// https://blog.usejournal.com/writing-better-reducers-with-react-and-typescript-3-4-30697b926ada

const initialState: IStateModel = {
  pageList: [],
};

function updatePageList(state: IStateModel, payload: Array<IEmployee>) {
  return <const>{
    ...state,
    pageList: payload,
  };
}
type Action = ReturnType<typeof updatePageList> | IStateModel;

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
