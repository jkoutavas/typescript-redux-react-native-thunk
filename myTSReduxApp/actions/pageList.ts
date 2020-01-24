import {
  EReduxActionTypes,
  IEmployee,
  GetPageListAction,
  AActions,
  IStateModel,
} from '../constants';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {ActionCreator} from 'redux';

export const setPageList: ActionCreator<AActions> = function setPageList(
  pageList: [IEmployee],
) {
  return {
    type: EReduxActionTypes.GET_PAGE_LIST,
    payload: pageList,
  };
};

// https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405
type GetPageThunkAction = ThunkAction<
  Promise<void>,
  IStateModel,
  {},
  GetPageListAction
>;
export const getPageList: ActionCreator<GetPageThunkAction> = function getPageList(): GetPageThunkAction {
  return async (
    dispatch: ThunkDispatch<{}, {}, GetPageListAction>,
  ): Promise<void> => {
    await fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setPageList(responseJson.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};
