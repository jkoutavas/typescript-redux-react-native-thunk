import { ActionsUnion, DispatchAction } from '../type';
import { createAction } from '../action';
import { Employee } from './type';

// A difference from Joshua's article:
//  it's better to use union types then enum because they are easier to cast
export type ActionTypes = 'GET_PAGE_LIST';

export const actions = {
  getPageList: (options: Employee[]) => createAction('GET_PAGE_LIST', options),
};

export type Actions = ActionsUnion<typeof actions>;

export function getPageListAction(): DispatchAction<ActionTypes, Employee[]> {
  return async (dispatch) => {
    await fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(actions.getPageList(responseJson.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
