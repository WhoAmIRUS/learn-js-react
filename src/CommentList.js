import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'Comment';
import CommentAdder from 'CommentAdder';

function CommentList({ comments }) {
  if (!comments.length) return null;
  const commentList = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));
  return (
    <div>
      <ul>{commentList}</ul>
      <CommentAdder />
    </div>
  );
}

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
