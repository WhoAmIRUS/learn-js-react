import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ArticleList from '../ArticleList';
import Article from '../Arcticle';

class Articles extends Component {
  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id} />;
  };
  getGreeting = () => {
    return <h2>Select article</h2>;
  };

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles" render={this.getGreeting} exact />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }
}

Articles.propTypes = {};

export default Articles;
