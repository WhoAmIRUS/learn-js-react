import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { loadPageOfComments } from '../AC';
import Comment from './Comment';
import Loader from './Loader';
import { commentsSelector } from '../selectors';

class PageOfComments extends Component {
  static createCommentList(comments) {
    return comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));
  }
  state = {
    limit: 5,
  };
  componentWillMount() {
    this.props.loadPageOfComments(this.props.page, this.state.limit);
  }
  componentWillReceiveProps({ page, loadPageOfComments }) {
    loadPageOfComments(page, this.state.limit);
  }
  getComments = () => {
    const { comments, loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    const commentList = PageOfComments.createCommentList(comments);
    return <ul>{commentList}</ul>;
  };
  getPages = () => {
    const { total } = this.props;
    const countOfPages = Math.ceil(total / this.state.limit);
    const linkList = [];
    for (let i = 1; i <= countOfPages; i += 1) {
      linkList.push(<li key={i}><NavLink activeStyle={{ color: 'red' }} to={`/comments/${i}`} >{i}</NavLink></li>);
    }
    return <ul>{linkList}</ul>;
  };
  render() {
    return (
      <div>
        {this.getPages()}
        {this.getComments()}
      </div>
    );
  }
}

PageOfComments.propTypes = {
  comments: PropTypes.array,
  loadPageOfComments: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
  page: PropTypes.number,
};

export default connect((state, { page }) => {
  return {
    comments: commentsSelector(state, state.comments.pagination.getIn([page, 'ids'])),
    total: state.comments.total,
    loading: state.comments.pagination.getIn([page, 'loading']),
  };
}, { loadPageOfComments })(PageOfComments);
