import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import CommentsPagination from '../CommentsPagination';

function getCommentsPagination({ match }) {
  return <CommentsPagination page={+match.params.page} />;
}

const PageOfComments = ({ match }) => {
  if (match.isExact) return <Redirect to="/comments/1" />;
  return <Route path="/comments/:page" render={getCommentsPagination} />;
};

PageOfComments.propTypes = {
  match: PropTypes.object,
};

export default PageOfComments;
