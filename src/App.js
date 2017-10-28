import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Jumbotron, Grid } from 'react-bootstrap';
import InsuranceForm from "./Components/InsuranceForm";

class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to merch-it</h1>
          </header>
          <p className="App-intro">Insurances for the wandering travelers</p>

          <InsuranceForm />
        </Grid>
      </Jumbotron>
    );
  }
}

export default App;
