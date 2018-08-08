import React, { Component } from 'react';
import { articles } from './fixtures';
import ArticleList from './ArticleList';
import DayPicker from './DayPicker';

export default class App extends Component {
  render() {
    return (
      <div>
        <DayPicker />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
