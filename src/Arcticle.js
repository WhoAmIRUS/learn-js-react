import React, { Component } from 'react';
import CommentList from 'CommentList';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  getComments() {
    const { article } = this.props;
    if (!article.comments) return null;
    return <CommentList comments={article.comments} />;
  }
  getBody() {
    if (!this.state.isOpen) {
      return null;
    }
    const { article } = this.props;
    return (
      <div>
        <p>{article.text}</p>
        {this.getComments()}
      </div>
    );
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { article } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>button</button>
        {this.getBody()}
      </div>
    );
  }
}
