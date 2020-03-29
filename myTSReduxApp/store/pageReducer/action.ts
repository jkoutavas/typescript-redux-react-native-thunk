import {ActionsUnion, DispatchAction} from '../type';
import {createAction} from '../action';
import {Employee} from './type';

export enum ActionTypes {
  GET_PAGE_LIST = 'GET_PAGE_LIST',
}

export const Actions = {
  getPageList: (options: Array<Employee>) =>
    createAction(ActionTypes.GET_PAGE_LIST, options),
};

export type Actions = ActionsUnion<typeof Actions>;

export function getPageListAction(): DispatchAction {
  return async dispatch => {
    await fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(Actions.getPageList(responseJson.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
}
