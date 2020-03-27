import {Action} from 'redux';
import {Employee} from './type';

// use typescript enum rather than action constants
export enum EReduxActionTypes {
  GET_PAGE_LIST = 'GET_PAGE_LIST',
}

export interface GetPageListAction extends Action<EReduxActionTypes> {
  type: typeof EReduxActionTypes.GET_PAGE_LIST;
  payload: Array<Employee>;
}

export type AllActions = GetPageListAction; // | FooAction | BarAction
