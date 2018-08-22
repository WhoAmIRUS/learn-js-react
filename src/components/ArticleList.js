import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Arcticle';
import accordionDecorator from '../decorators/Accordion';
import { filtredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';
import Loader from './Loader';

class ArticleList extends React.Component {
  static propTypes = {
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
    // from redux
    articles: PropTypes.array,
    loading: PropTypes.bool,
    loadAllArticles: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render() {
    if (this.props.loading) return <Loader />;
    const articleList = this.props.articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.props.openItemId}
          toggleOpen={this.props.toggleOpenItem(article.id)}
        />
      </li>
    ));
    return <ul>{articleList}</ul>;
  }
}

export default connect((state) => {
  return {
    articles: filtredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  };
}, { loadAllArticles })(accordionDecorator(ArticleList));
