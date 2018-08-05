import React from 'react';

export default function Comment({ comment }) {
  return (
    <div>
      <div>{comment.user}</div>
      <div>{comment.text}</div>
    </div>
  );
}
