import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div>
      <div>{comment.user}</div>
      <div>{comment.text}</div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Comment;
