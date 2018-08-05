import React from 'react';
import Comment from 'Comment';

export default function CommentList({ comments }) {
  const commentList = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
  return <ul>{commentList}</ul>;
}
