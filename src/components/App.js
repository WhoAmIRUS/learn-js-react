import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import DayPicker from './Filters/DayPicker';
import Counter from './Counter';
import Articles from './routes/Articles';
import PageOfComments from './routes/PageOfComments';

export default function App() {
  return (
    <Router>
      <div>
        <h2>Menu</h2>
        <div><NavLink activeStyle={{ color: 'red' }} to="/counter">Counter</NavLink></div>
        <div><NavLink activeStyle={{ color: 'red' }} to="/filter">Filter</NavLink></div>
        <div><NavLink activeStyle={{ color: 'red' }} to="/articles">Articles</NavLink></div>
        <div><NavLink activeStyle={{ color: 'red' }} to="/comments">Comments</NavLink></div>
        <Route path="/counter" component={Counter} />
        <Route path="/filter" component={DayPicker} />
        <Route path="/articles" component={Articles} />
        <Route path="/comments/:page" component={PageOfComments} />
      </div>
    </Router>
  );
}
