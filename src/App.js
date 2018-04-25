import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={ErrorPage} />

          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
