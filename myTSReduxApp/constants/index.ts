import {Action} from 'redux';

// use typescript enum rather than action constants
export enum EReduxActionTypes {
  GET_PAGE_LIST = 'GET_PAGE_LIST',
}

export interface GetPageListAction extends Action<EReduxActionTypes> {
  type: typeof EReduxActionTypes.GET_PAGE_LIST;
  payload: {};
}

export type AllActions = GetPageListAction; // | FooAction | BarAction

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

export interface IStateModel {
  pageList: Array<IEmployee>;
}
