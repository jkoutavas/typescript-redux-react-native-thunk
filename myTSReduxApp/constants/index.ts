export enum EReduxActionTypes {
  GET_PAGE_LIST = 'GET_PAGE_LIST',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}
