import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

export class InsuranceForm extends Component {
  state = { email: '', amount: 0 };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkout = event => {
    event.preventDefault();

    const { email, amount } = this.state;

    fetch('http://localhost:3001/payments/attempt_payment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        amount
      })
    })
      .then(response => response.json())
      .then(response => (window.location.href = response.payment_url));
  };

  render() {
    return (
      <Form>
        <FieldGroup
          id="region"
          type="text"
          label="Email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <div className="flexbox">
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="10000"
              onChange={this.handleChange}
            />{' '}
            $10 000 - Basic
          </label>
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="20000"
              onChange={this.handleChange}
            />{' '}
            $20 000 - Journeyman
          </label>
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="40000"
              onChange={this.handleChange}
            />{' '}
            $40 000 - Pro
          </label>
        </div>

        <br />
        <Button type="submit" bsStyle="success" onClick={this.checkout}>
          Checkout
        </Button>
      </Form>
    );
  }
}

export default InsuranceForm;
