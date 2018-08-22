import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares';
import api from '../middlewares/api';


const enhancer = applyMiddleware(thunk, logger, api);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

window.store = store;

export default store;
