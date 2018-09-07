import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import DayPicker from './Filters/DayPicker';
import Counter from './Counter';
import Articles from './routes/Articles';
import PageOfComments from './routes/PageOfComments';
import NotFound from './routes/NotFound';
import LangProvider from './LangProvider';

export default class App extends React.Component {
  state = {
    language: 'ru',
  };
  handleChangeLanguageRu = () => {
    this.setState({
      language: 'ru',
    });
  };
  handleChangeLanguageEn = () => {
    this.setState({
      language: 'en',
    });
  };
  render() {
    return (
      <Router>
        <LangProvider language={this.state.language}>
          <div>
            <div>
              <button onClick={this.handleChangeLanguageRu}>ru</button>
              <button onClick={this.handleChangeLanguageEn}>en</button>
            </div>
            <h2>Menu</h2>
            <div><NavLink activeStyle={{ color: 'red' }} to="/counter">Counter</NavLink></div>
            <div><NavLink activeStyle={{ color: 'red' }} to="/filter">Filter</NavLink></div>
            <div><NavLink activeStyle={{ color: 'red' }} to="/articles">Articles</NavLink></div>
            <div><NavLink activeStyle={{ color: 'red' }} to="/comments">Comments</NavLink></div>
            <Switch>
              <Route path="/counter" component={Counter} />
              <Route path="/filter" component={DayPicker} />
              <Route path="/articles" component={Articles} />
              <Route path="/comments" component={PageOfComments} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </LangProvider>
      </Router>
    );
  }
}
