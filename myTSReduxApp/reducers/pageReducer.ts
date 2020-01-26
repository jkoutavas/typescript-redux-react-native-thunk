import {EReduxActionTypes, IStateModel, AllActions} from '../constants';
import {Reducer} from 'redux';

const initialState: IStateModel = {
  pageList: [],
};

const pageReducer: Reducer<IStateModel, AllActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case EReduxActionTypes.GET_PAGE_LIST:
      return {
        ...state,
        pageList: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
