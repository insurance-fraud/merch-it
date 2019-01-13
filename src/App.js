import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import logo from './logo.png';

import Home from './Components/Home';
import ErrorPage from './Pages/ErrorPage';
import SuccessPage from './Pages/SuccessPage';
import FailPage from './Pages/FailPage';

class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to merch-it</h1>
          </header>
          <p>Insurances for the wandering travelers.</p>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/success" component={SuccessPage} />
            <Route exact path="/fail" component={FailPage} />

            <Route path="*" component={Home} />
          </Switch>
        </Grid>
      </Jumbotron>
    );
  }
}

export default withRouter(App);
