import React from 'react';
import ArticleList from './ArticleList';
import DayPicker from './Filters/DayPicker';
import Counter from './Counter';

export default function App() {
  return (
    <div>
      <Counter />
      <DayPicker />
      <ArticleList />
    </div>
  );
}
