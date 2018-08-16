import {DELETE_ARTICLE, CHANGE_DATA_RANGE, INCREMENT, ADD_COMMENT } from '../constants';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payLoad: { id },
  };
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATA_RANGE,
    payLoad: {
      dateRange,
    },
  };
}

export function addComment(articleId, user, text) {
  return {
    type: ADD_COMMENT,
    payLoad: {
      articleId,
      user,
      text,
    },
    generateId: true,
  };
}
