import { combineReducers } from 'redux';
import articles from './articles';
import filters from './filters';
import counter from './counter';

export default combineReducers({
  articles,
  filters,
  counter,
});
