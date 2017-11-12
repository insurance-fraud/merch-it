import React, { Component } from 'react';
import _ from 'lodash';
import {
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';

import FieldGroup from './FieldGroup';
import PersonForm from './PersonForm';

class InsuranceForm extends Component {
  constructor() {
    super();

    this.state = {
      from: Date.now(),
      to: Date.now(),
      region: '',
      totalNumberOfPersons: 1,
      numberOfPersons: 0
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
      totalNumberOfPersons = parseInt(value) + 1;
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
          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button>From</Button>
              </InputGroup.Button>
              <FormControl
                type="text"
                value={this.state.from}
                onChange={event => this.setState({ from: event.target.value })}
              />
            </InputGroup>
          </FormGroup>{' '}
          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button>To</Button>
              </InputGroup.Button>
              <FormControl
                type="text"
                value={this.state.from}
                onChange={event => this.setState({ from: event.target.value })}
              />
            </InputGroup>
          </FormGroup>
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

        {_.range(this.state.totalNumberOfPersons).map(key => (
          <PersonForm key={key} personNumber={key} />
        ))}
      </div>
    );
  }
}

export default InsuranceForm;
