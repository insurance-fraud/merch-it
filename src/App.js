import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { Jumbotron, Grid } from 'react-bootstrap';
import InsuranceForm from './Components/InsuranceForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Grid>
            <header>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Welcome to merch-it</h1>
            </header>
            <p>Insurances for the wandering travelers.</p>
            <p>Book your travel insurance by filling out the form below:</p>

            <InsuranceForm />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
