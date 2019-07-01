import React, { Component } from 'react';

class FailPage extends Component {
  render() {
    return (
      <h1 data-cy="errorBox">
        Oops! The transaction didn't go through, sorry.
      </h1>
    );
  }
}

export default FailPage;
