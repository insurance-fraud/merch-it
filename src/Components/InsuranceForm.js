import React, { Component } from 'react';
import _ from 'lodash';
import { Form, Button } from 'react-bootstrap';
import { DateRangePicker } from 'react-dates';

import FieldGroup from './FieldGroup';
import PersonForm from './PersonForm';

class InsuranceForm extends Component {
  constructor() {
    super();

    this.state = {
      from: null,
      to: null,
      region: '',
      totalNumberOfPersons: 1,
      numberOfPersons: null
    };

    this.handleNumberOfPersonsChange = this.handleNumberOfPersonsChange.bind(
      this
    );
  }

  handleNumberOfPersonsChange(event) {
    let value = event.target.value;
    let totalNumberOfPersons = 0;

    if (value < 0 || value > 20) {
      value = 0;
    }

    if (value === '') {
      totalNumberOfPersons = 1;
    } else {
      totalNumberOfPersons = parseInt(value, 0) + 1;
    }

    this.setState({
      numberOfPersons: value,
      totalNumberOfPersons: totalNumberOfPersons
    });
  }

  render() {
    return (
      <div>
        <Form inline>
          <DateRangePicker
            startDate={this.state.from}
            startDateId={'insurance-start-date'}
            endDate={this.state.to}
            endDateId={'insurance-end-date'}
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ from: startDate, to: endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </Form>
        <br />

        <Form>
          <FieldGroup
            id="region"
            type="text"
            label="Region you're visiting"
            placeholder="Enter region name"
            value={this.state.region}
            onChange={event => this.setState({ region: event.target.value })}
          />

          <FieldGroup
            id="numberOfPersons"
            type="number"
            label="Number of persons travelling with you"
            placeholder="Enter number of persons travelling with you"
            value={this.state.numberOfPersons}
            onChange={this.handleNumberOfPersonsChange}
          />
        </Form>

        <h3>Information about travellers</h3>

        <div className="col-lg-12">
          {_.range(this.state.totalNumberOfPersons).map(key => (
            <PersonForm key={key} personNumber={key} />
          ))}
        </div>

        <div className="container">
          <Button bsStyle="success">Checkout</Button>
        </div>
      </div>
    );
  }
}

export default InsuranceForm;
