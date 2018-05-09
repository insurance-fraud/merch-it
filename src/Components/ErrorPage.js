import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    errors: state.payment.errors
  };
};

export default connect(mapStateToProps)(ErrorPage);
