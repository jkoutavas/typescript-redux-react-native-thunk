import {createStore, combineReducers} from 'redux';
import pageReducer from './pageReducer/reducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({pageList: pageReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
