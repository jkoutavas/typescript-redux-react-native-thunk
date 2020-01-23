import {EReduxActionTypes, IEmployee, IReduxBaseAction} from '../constants';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {action} from 'typesafe-actions';

export const pageActions = {
  get: () => action(EReduxActionTypes.GET_PAGE_LIST, {}),
};

export function setPageList(pageList: [IEmployee]) {
  return {
    type: EReduxActionTypes.GET_PAGE_LIST,
    payload: pageList,
  };
}

// https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405
export function getPageList(): ThunkAction<
  Promise<void>,
  {},
  {},
  IReduxGetPageListAction
> {
  return async (
    dispatch: ThunkDispatch<{}, {}, IReduxGetPageListAction>,
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
}
