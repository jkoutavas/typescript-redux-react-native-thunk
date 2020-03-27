export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

export interface StateModel {
  pageList: Array<Employee>;
}
