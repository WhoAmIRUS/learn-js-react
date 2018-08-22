import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { deleteArticle, loadArticle, loadComments } from '../AC';
import Loader from './Loader';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
    // from redux
    deleteArticle: PropTypes.func,
    loadArticle: PropTypes.func,
    loadComments: PropTypes.func,
  };

  componentWillReceiveProps({
    article, isOpen, loadArticle, loadComments,
  }) {
    if (isOpen && !article.text && !article.loading) {
      console.log('download article');
      loadArticle(article.id);
      loadComments(article.id);
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
    return (
      <div>
        <p>{article.text}</p>
        <CommentList article={article} />
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
    if (article.loading) return <Loader />;
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

export default connect(null, { deleteArticle, loadArticle, loadComments })(Article);
