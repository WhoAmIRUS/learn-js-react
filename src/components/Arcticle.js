import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { deleteArticle } from '../AC';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
    //from redux
    deleteArticle: PropTypes.func,
  };
  componentWillUpdate() {
    console.log('update');
  }
  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div>
        <p>{article.text}</p>
        <CommentList comments={article.comments} />
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

export default connect(null, { deleteArticle })(Article);
