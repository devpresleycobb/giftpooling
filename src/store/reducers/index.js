/* eslint no-param-reassign: 0 */
import {combineReducers} from 'redux';

import auth from './auth';

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {
  return appReducer(state, action);
};
