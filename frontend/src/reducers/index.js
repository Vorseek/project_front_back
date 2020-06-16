import { combineReducers } from 'redux';
import dataReducer from './data';

export default function() {
  return combineReducers({
    data: dataReducer,
  });
}