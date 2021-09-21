import { Action as ReduxAction, ActionCreatorsMapObject } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as pageReducer from './pageReducer';
import { InferredStore } from './provider';

export type Action<T, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export type State = {
  pageReducer: ReturnType<typeof pageReducer.reducer>;
};

export type Store = InferredStore;

export type Dispatch<A, P = void> = ThunkDispatch<State, void, Action<A, P>>;

export type Actions = pageReducer.Actions;

export type DispatchAction<A, P> = ThunkAction<Promise<void>, State, void, Action<A, P>>;
