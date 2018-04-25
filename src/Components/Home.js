import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import InsuranceForm from './InsuranceForm';
import logo from '../logo.png';

class Home extends Component {
  render() {
    return (
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
    );
  }
}

export default Home;
