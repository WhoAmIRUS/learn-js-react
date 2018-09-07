import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ArticleList from '../ArticleList';
import Article from '../Arcticle';
import LocalizedText from '../LocalizedText';

class Articles extends Component {
  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id} />;
  };
  getGreeting = () => {
    return <h2><LocalizedText>Select article</LocalizedText></h2>;
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

Articles.propTypes = {
  language: PropTypes.string,
};

export default Articles;
