import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const articlesGetter = state => state.articles.entities;
const filtersGetter = state => state.filters;
const commentsGetter = state => state.comments.entities;
const articleCommentsGetter = (state, ownProps) => state.articles.entities.get(ownProps.article.id).comments;

export const filtredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const { dateRange: { from, to } } = filters;
  return mapToArr(articles).filter((article) => {
    const published = Date.parse(article.date);
    return !from || !to || (published >= from && published <= to);
  });
});

export const commentsSelector = createSelector(commentsGetter, articleCommentsGetter, (comments, articleComments) => {
  return mapToArr(comments).filter((comment) => {
    return articleComments.indexOf(comment.id) === -1 ? 0 : 1;
  });
});
