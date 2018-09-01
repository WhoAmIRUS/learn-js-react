import React from 'react';
import PropTypes from 'prop-types';
import CommentsPagination from '../CommentsPagination';

const PageOfComments = ({ match }) => {
  return <CommentsPagination page={+match.params.page} />;
};

PageOfComments.propTypes = {
  match: PropTypes.object,
};

export default PageOfComments;
