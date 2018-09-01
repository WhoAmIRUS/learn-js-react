import { Record, OrderedMap, Map } from 'immutable';
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL, LOAD_PAGE_OF_COMMENTS } from '../constants';
import { arrToMap } from '../helpers';

const CommentRecord = Record({
  id: undefined,
  user: undefined,
  text: undefined,
});

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
  total: null,
  pagination: new Map({}),
});

export default (comments = ReducerRecord(), action) => {
  const { type, payLoad } = action;
  switch (type) {
    case ADD_COMMENT:
      return comments.setIn(['entities', payLoad.id], new CommentRecord({ ...payLoad }));
    case LOAD_COMMENTS + START:
      return comments.set('loading', true);
    case LOAD_COMMENTS + SUCCESS:
      return comments.update('entities', comments => comments.concat(arrToMap(action.response, CommentRecord)))
        .set('loading', false)
        .set('loaded', true);
    case LOAD_COMMENTS + FAIL:
      console.log(action.error);
      return comments.set('loaded', false);
    case LOAD_PAGE_OF_COMMENTS + START:
      return comments.setIn(['pagination', payLoad.page, 'loading'], true)
        .setIn(['pagination', payLoad.page, 'loaded'], false);
    case LOAD_PAGE_OF_COMMENTS + SUCCESS:
      return comments.update('entities', comments => comments.concat(arrToMap(payLoad.response.records, CommentRecord)))
        .set('total', payLoad.response.total)
        .setIn(['pagination', payLoad.page, 'loading'], false)
        .setIn(['pagination', payLoad.page, 'loaded'], true)
        .setIn(['pagination', payLoad.page, 'ids'], payLoad.response.records.map(comment => comment.id));
  }
  return comments;
};
