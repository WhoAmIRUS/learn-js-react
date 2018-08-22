import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import CommentAdder from './CommentAdder';
import Loader from './Loader';
import { commentsSelector } from '../selectors';

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    // from redux
    comments: PropTypes.array,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
  };

  render() {
    if (this.props.loading) return <Loader />;
    const { comments, article } = this.props;
    let commentList = null;
    if (comments && comments.length && this.props.loaded) {
      commentList = comments.map(comment => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ));
    }
    return (
      <div>
        <ul>{commentList}</ul>
        <CommentAdder article={article} />
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    comments: commentsSelector(state, ownProps),
    loading: state.comments.loading,
    loaded: state.comments.loaded,
  };
})(CommentList);
