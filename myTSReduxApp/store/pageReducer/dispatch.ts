import {Employee, StateModel} from './type';
import {EReduxActionTypes, AllActions, GetPageListAction} from './action';

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {ActionCreator} from 'redux';

export const setPageList: ActionCreator<AllActions> = function setPageList(
  pageList: Employee[],
) {
  return {
    type: EReduxActionTypes.GET_PAGE_LIST,
    payload: pageList,
  };
};

// https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405
type GetPageThunkAction = ThunkAction<
  Promise<void>,
  StateModel,
  {},
  GetPageListAction
>;
// TODO: handle the ActionCreator<GetPageThunkAction> linter error
export const getPageList: ActionCreator<
  GetPageThunkAction
> = function getPageList(): GetPageThunkAction {
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
