import React, { Component, Fragment } from 'react';
import InsuranceForm from './InsuranceForm';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <p>Book your travel insurance by choosing insurance plan:</p>

        <InsuranceForm />
      </Fragment>
    );
  }
}

export default Home;
