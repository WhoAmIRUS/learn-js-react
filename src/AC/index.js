import { DELETE_ARTICLE, CHANGE_DATA_RANGE } from '../constants';

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
