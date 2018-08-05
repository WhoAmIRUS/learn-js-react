import React from 'react';
import Article from './Arcticle';

export default function ArticleList({ articles }) {
  const articleList = articles.map(article => <li key={article.id}><Article article={article} /></li>);
  return (
    <ul>
      {articleList}
    </ul>
  );
}
