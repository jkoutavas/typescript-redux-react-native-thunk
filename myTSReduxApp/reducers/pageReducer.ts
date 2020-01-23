import {EReduxActionTypes, IEmployee} from '../constants';
import {AnyAction} from 'redux';

interface IStateModel {
  pageList: Array<IEmployee>;
}

const initialState: IStateModel = {
  pageList: [],
};

const pageReducer = (state: IStateModel = initialState, action: AnyAction) => {
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
