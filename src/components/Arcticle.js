import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { deleteArticle, loadArticle } from '../AC';
import Loader from './Loader';

class Article extends Component {
  static propTypes = {
    id: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
    // from redux
    article: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    }),
    deleteArticle: PropTypes.func,
    loadArticle: PropTypes.func,
  };

  componentDidMount() {
    const { article, loadArticle, id } = this.props;
    if (!article || (!article.text && !article.loading)) {
      console.log('download article');
      loadArticle(id);
    }
  }

  componentWillUpdate() {
    console.log('update article');
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) {
      return null;
    }
    if (!article || article.loading) return <Loader />;
    return (
      <div>
        <p>{article.text}</p>
        { article.get('loading') ? null : <CommentList article={article} /> }
      </div>
    );
  }
  deleteArticle = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
    console.log('del');
  };
  render() {
    const { article, toggleOpen } = this.props;
    if (!article) return null;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>button</button>
        <button onClick={this.deleteArticle}>delete</button>
        {this.getBody()}
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    article: state.articles.entities.get(ownProps.id),
  };
}, { deleteArticle, loadArticle })(Article);
