import {
  DELETE_ARTICLE,
  CHANGE_DATA_RANGE,
  INCREMENT,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START, SUCCESS, FAIL, LOAD_COMMENTS, LOAD_PAGE_OF_COMMENTS,
} from '../constants';

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

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article',
  };
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payLoad: { id },
    });

    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then(response => response.json())
        .then(response => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payLoad: { id, response },
        }))
        .catch(error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          error,
        }));
    }, 1000);
  };
}

export function loadComments(articleId) {
  return {
    type: LOAD_COMMENTS,
    callAPI: `/api/comment?article=${articleId}`,
  };
}

export function loadPageOfComments(page, limit) {
  return (dispatch, getState) => {
    const { comments } = getState();
    if (comments.pagination.getIn([page, 'loading']) || comments.pagination.getIn([page, 'ids'])) return null;
    dispatch({
      type: LOAD_PAGE_OF_COMMENTS + START,
      payLoad: { page },
    });
    console.log('download comments');
    setTimeout(() => {
      fetch(`/api/comment?limit=${limit}&offset=${(page - 1) * limit}`)
        .then(response => response.json())
        .then(response => dispatch({
          type: LOAD_PAGE_OF_COMMENTS + SUCCESS,
          payLoad: { page, response },
        }))
        .catch(error => dispatch({
          type: LOAD_COMMENTS + FAIL,
          error,
        }));
    }, 1000);
  };
}
