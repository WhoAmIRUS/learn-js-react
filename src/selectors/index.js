import { createSelector } from 'reselect';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filters;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const { dateRange: { from, to } } = filters;
  return Object.values(articles).filter((article) => {
    const published = Date.parse(article.date);
    return !from || !to || (published >= from && published <= to);
  });
});

export const commentsSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id];
});
