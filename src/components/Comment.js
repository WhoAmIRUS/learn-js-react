import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentsSelectorFactory } from '../selectors';

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

const mapStateToProps = () => {
  const commentsSelector = commentsSelectorFactory();
  return (state, ownProps) => {
    return {
      comment: commentsSelector(state, ownProps),
    };
  };
};

export default connect(mapStateToProps)(Comment);
