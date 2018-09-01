import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filtredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';
import Loader from './Loader';

class ArticleList extends React.Component {
  static propTypes = {
    // from redux
    articles: PropTypes.array,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    loadAllArticles: PropTypes.func,
  };

  componentDidMount() {
    const { loading, loaded, loadAllArticles } = this.props;
    if (!loading && !loaded) loadAllArticles();
  }

  render() {
    if (this.props.loading) return <Loader />;
    const articleList = this.props.articles.map(article => (
      <li key={article.id}>
        <NavLink activeStyle={{ color: 'red' }} to={`/articles/${article.id}`}>{article.title}</NavLink>
      </li>
    ));
    return (
      <div>
        <ul>{articleList}</ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    articles: filtredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  };
}, { loadAllArticles })((ArticleList));
