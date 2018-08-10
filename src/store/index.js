import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares';

const enhancer = applyMiddleware(logger);

const store = createStore(reducer, {}, enhancer);

export default store;
