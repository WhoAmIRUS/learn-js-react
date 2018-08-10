import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Arcticle';
import accordionDecorator from '../decorators/Accordion';
import { filtredArticlesSelector } from '../selectors';

function ArticleList(props) {
  const articleList = props.articles.map(article => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === props.openItemId}
        toggleOpen={props.toggleOpenItem(article.id)}
      />
    </li>
  ));
  return <ul>{articleList}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired,
};

export default connect((state) => {
  return {
    articles: filtredArticlesSelector(state),
  };
})(accordionDecorator(ArticleList));
