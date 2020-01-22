import {EReduxActionTypes} from '../constants';
import {AnyAction} from 'redux';

const initialState = {
  pageList: [],
};
const pageReducer = (state = initialState, action: AnyAction) => {
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
