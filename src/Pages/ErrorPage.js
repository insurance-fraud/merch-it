import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    const errors = this.props.errors;
    console.log(errors);

    return (
      <div>
        <p>{"There's been an error"}</p>

        <div>
          {errors && errors.map((error, index) => <p key={index}>{error}</p>)}
        </div>
      </div>
    );
  }
}

export default ErrorPage;
