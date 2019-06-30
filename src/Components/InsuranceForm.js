import React, { Component } from 'react';
import { Form, Button, FormGroup, HelpBlock } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

export class InsuranceForm extends Component {
  state = {
    email: '',
    amount: 0,
    emailValid: false,
    amountValid: false,
    validationErrors: { email: '', amount: '' }
  };

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.validateForm
    );
  };

  validateForm = () => {
    let {
      email,
      amount,
      emailValid,
      amountValid,
      validationErrors
    } = this.state;

    emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    validationErrors.email = emailValid ? '' : ' is invalid';
    amountValid = amount !== 0;
    validationErrors.amount = amountValid ? '' : ' is invalid';

    this.setState({ emailValid, amountValid, validationErrors });
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
        payment: {
          email,
          amount
        },
        merchant_id: process.env.REACT_APP_MERCHANT_ID,
        merchant_password: process.env.REACT_APP_MERCHANT_PASSWORD
      })
    })
      .then(response => response.json())
      .then(response => {
        window.location.href = `${response.payment_url}?id=${
          response.payment_id
        }`;
      });
  };

  render() {
    const { email, emailValid, amountValid } = this.state;

    return (
      <Form>
        <FieldGroup
          id="region"
          type="email"
          label="Email"
          name="email"
          placeholder="Enter email"
          validationState={emailValid ? 'success' : 'error'}
          help={emailValid ? '' : 'Email is invalid'}
          value={email}
          data-cy="email"
          onChange={this.handleChange}
        />

        <div className="flexbox">
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="10000"
              data-cy="10000"
              onChange={this.handleChange}
            />{' '}
            $10 000 - Basic
          </label>
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="20000"
              data-cy="20000"
              onChange={this.handleChange}
            />{' '}
            $20 000 - Journeyman
          </label>
          <label className="insurance">
            <input
              name="amount"
              type="radio"
              value="40000"
              data-cy="40000"
              onChange={this.handleChange}
            />{' '}
            $40 000 - Pro
          </label>
        </div>

        {!amountValid && (
          <FormGroup validationState="error">
            <HelpBlock>Please select Insurance plan</HelpBlock>
          </FormGroup>
        )}

        <br />
        {emailValid && amountValid && (
          <Button
            type="submit"
            bsStyle="success"
            data-cy="submit"
            onClick={this.checkout}
          >
            Checkout
          </Button>
        )}
      </Form>
    );
  }
}

export default InsuranceForm;
