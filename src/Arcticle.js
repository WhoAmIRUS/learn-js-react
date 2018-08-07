import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from 'CommentList';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
  };
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
  render() {
    const { article, toggleOpen } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>button</button>
        {this.getBody()}
      </div>
    );
  }
}
