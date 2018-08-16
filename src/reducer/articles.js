import { normalizedArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants';

const articlesMap = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});

export default (articleState = articlesMap, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case DELETE_ARTICLE:
      const tmpState = { ...articleState };
      delete tmpState[payLoad.id];
      return tmpState;
    case ADD_COMMENT:
      const article = articleState[payLoad.articleId];
      return {
        ...articleState,
        [payLoad.articleId]: {
          ...article,
          comments: (article.comments || []).concat(payLoad.id.toString()),
        },
      };
  }
  return articleState;
};
