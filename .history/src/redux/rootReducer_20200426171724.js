import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import 

export const rootReducer = combineReducers({
  usersReducer,
});