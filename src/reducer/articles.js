import { Record, OrderedMap } from 'immutable';
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../helpers';

const ArticleRecord = Record({
  loading: false,
  id: undefined,
  date: undefined,
  title: undefined,
  text: undefined,
  comments: [],
});

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
});

export default (articleState = ReducerRecord(), action) => {
  const { type, payLoad } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payLoad.id]);

    case ADD_COMMENT:
      return articleState.updateIn(['entities', payLoad.articleId, 'comments'], comments => comments.concat(payLoad.id.toString()));

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(action.response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true);

    case LOAD_ARTICLE + START:
      return articleState.setIn(['entities', payLoad.id, 'loading'], true);

    case LOAD_ARTICLE + SUCCESS:
      return articleState.setIn(['entities', payLoad.id], ArticleRecord({
        loading: false,
        ...payLoad.response,
      }));
  }
  return articleState;
};
