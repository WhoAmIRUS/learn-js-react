import { Record } from 'immutable';
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants';
import { arrToMap, ReducerRecord } from '../helpers';

const CommentRecord = Record({
  id: undefined,
  user: undefined,
  text: undefined,
});

export default (comments = ReducerRecord(), action) => {
  const { type, payLoad } = action;
  switch (type) {
    case ADD_COMMENT:
      return comments.setIn(['entities', payLoad.id], new CommentRecord({...payLoad}));
    case LOAD_COMMENTS + START:
      return comments.set('loading', true);
    case LOAD_COMMENTS + SUCCESS:
      return comments.update('entities', comments => comments.concat(arrToMap(action.response, CommentRecord)))
        .set('loading', false)
        .set('loaded', true);
    case LOAD_COMMENTS + FAIL:
      console.log(action.error);
      return comments.set('loaded', false);
  }
  return comments;
};
