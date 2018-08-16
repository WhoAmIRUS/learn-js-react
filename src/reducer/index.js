import { combineReducers } from 'redux';
import articles from './articles';
import filters from './filters';
import counter from './counter';
import comments from './comments';

export default combineReducers({
  comments,
  articles,
  filters,
  counter,
});
