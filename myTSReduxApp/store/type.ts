import {Action as ReduxAction, Store as ReduxStore} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import * as pageReducer from './pageReducer';

type AnyFunction = (...args: any[]) => any;
type StringMap<T> = {[key: string]: T};

export type Action<T, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{payload: P}>;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<
  A[keyof A]
>;

export type State = {
  pageReducer: ReturnType<typeof pageReducer.reducer>;
};

export type Store<A> = ReduxStore<State, Action<A>> & {
  dispatch: Dispatch<A>;
};

export type Dispatch<A> = ThunkDispatch<State, void, Action<A>>;

export type Actions = pageReducer.Actions;

export type DispatchAction<A, P> = ThunkAction<
  Promise<P>,
  State,
  void,
  Action<A>
>;
