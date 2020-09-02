import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiMiddleware from './middleware';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, apiMiddleware, loggerMiddleware),
);

export default store;
