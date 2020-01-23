// use typescript enum rather than action constants
export enum EReduxActionTypes {
  GET_PAGE_LIST = 'GET_PAGE_LIST',
}

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

export interface IStateModel {
  pageList: Array<IEmployee>;
}
