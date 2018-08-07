import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'Comment';

function CommentList({ comments }) {
  if (!comments.length) return null;
  const commentList = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));
  return <ul>{commentList}</ul>;
}

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
