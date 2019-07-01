import React, { Component } from 'react';

class SuccessPage extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    return (
      <div data-cy="successBox">
        <h1>Congrats, you've bought insurance from us!</h1>
        <p>We've sent an email to {email} with a receipt</p>
      </div>
    );
  }
}

export default SuccessPage;
