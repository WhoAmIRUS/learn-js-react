import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentAdder from './CommentAdder';

function CommentList({ article }) {
  let commentList = null;
  const { comments } = article;
  if (comments.length) {
    commentList = comments.map(id => (
      <li key={id}>
        <Comment id={id} />
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

CommentList.propTypes = {
  article: PropTypes.object,
};

export default CommentList;
