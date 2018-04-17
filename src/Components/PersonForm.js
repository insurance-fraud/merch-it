import React, { Component } from 'react';
import { FormGroup, ControlLabel, Radio, Panel } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class PersonForm extends Component {
  constructor() {
    super();

    this.state = {
      ageRange: '',
      fullName: '',
      personalIDNumber: '000000000',
      passportNumber: '0000000',
      address: '',
      telephoneNumber: ''
    };
  }

  render() {
    const ageRangeOptions = ['under 18', '18-60', 'over 60'];
    const insuranceAmounts = [10000, 30000, 50000, 100000];

    return (
      <div className="col-lg-4">
        <Panel>
          <Panel.Heading>
            {this.state.fullName || `#${this.props.personNumber} traveller`}
          </Panel.Heading>

          <Panel.Body>
            <FieldGroup
              id="fullName"
              type="text"
              label="Persons full name"
              placeholder="Enter full name"
              value={this.state.fullName}
              onChange={event =>
                this.setState({ fullName: event.target.value })
              }
            />

            <FieldGroup
              id="personalIDNumber"
              type="text"
              label="Personal ID number"
              placeholder="Enter personal ID number"
              value={this.state.personalIDNumber}
              onChange={event =>
                this.setState({ personalIDNumber: event.target.value })
              }
            />

            <FieldGroup
              id="passportNumber"
              type="text"
              label="Passport number"
              placeholder="Enter passport number"
              value={this.state.passportNumber}
              onChange={event =>
                this.setState({ passportNumber: event.target.value })
              }
            />

            <FieldGroup
              id="address"
              type="text"
              label="Address of the person"
              placeholder="Enter persons address"
              value={this.state.address}
              onChange={event => this.setState({ address: event.target.value })}
            />

            <FieldGroup
              id="telephoneNumber"
              type="text"
              label="Telephone number of the person"
              placeholder="Enter persons telephone number"
              value={this.state.telephoneNumber}
              onChange={event =>
                this.setState({ telephoneNumber: event.target.value })
              }
            />
            <FormGroup>
              <ControlLabel>
                Age range of the person {this.props.personNumber}
              </ControlLabel>{' '}
              {ageRangeOptions.map(option => (
                <Radio
                  key={option}
                  name={`ageRange${this.props.personNumber}`}
                  onChange={() => this.setState({ ageRange: option })}
                  inline
                >
                  {option}
                </Radio>
              ))}
            </FormGroup>

            <FormGroup>
              <ControlLabel>Does the person play any sports?</ControlLabel>{' '}
              <Radio
                name={`sport${this.props.personNumber}`}
                onChange={() => this.setState({ showSport: true })}
                inline
              >
                Yes
              </Radio>{' '}
              <Radio
                name={`sport${this.props.personNumber}`}
                onChange={() => this.setState({ showSport: false })}
                inline
              >
                No
              </Radio>
              {this.state.showSport && (
                <FieldGroup
                  id="sport"
                  type="text"
                  label="Sport that the person plays"
                  placeholder="Enter sport name"
                  value={this.state.sport}
                  onChange={event =>
                    this.setState({ sport: event.target.value })
                  }
                />
              )}
            </FormGroup>

            <FormGroup>
              <ControlLabel>Insurance amount</ControlLabel>{' '}
              {insuranceAmounts.map(option => (
                <Radio
                  key={option}
                  name={`insuranceAmount${this.props.personNumber}`}
                  onChange={() => this.setState({ insuranceAmount: option })}
                  inline
                >
                  {option} €
                </Radio>
              ))}
            </FormGroup>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default PersonForm;
