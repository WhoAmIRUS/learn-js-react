import { createSelector } from 'reselect';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filters;

export const filtredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const { dateRange: { from, to } } = filters;
  return articles.filter((article) => {
    const published = Date.parse(article.date);
    return !from || !to || (published >= from && published <= to);
  });
});
