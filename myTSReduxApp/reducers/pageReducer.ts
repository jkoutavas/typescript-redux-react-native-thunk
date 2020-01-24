import {EReduxActionTypes, IStateModel, AActions} from '../constants';
import {Reducer} from 'redux';

const initialState: IStateModel = {
  pageList: [],
};

const pageReducer: Reducer<IStateModel, AActions> = (
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
