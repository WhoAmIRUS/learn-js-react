import { normalizedComments } from '../fixtures';
import { ADD_COMMENT } from '../constants';

const commentsMap = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default (comments = commentsMap, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case ADD_COMMENT:
      return {
        ...comments,
        [payLoad.id]: {
          id: payLoad.id,
          user: payLoad.user,
          text: payLoad.text,
        },
      };
  }
  return comments;
};
