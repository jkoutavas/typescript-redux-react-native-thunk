export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

export interface IStateModel {
  pageList: Array<IEmployee>;
}
