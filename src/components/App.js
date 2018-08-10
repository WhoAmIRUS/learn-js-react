import React from 'react';
import ArticleList from './ArticleList';
import DayPicker from './Filters/DayPicker';

export default function App() {
  return (
    <div>
      <DayPicker />
      <ArticleList />
    </div>
  );
}
