import React, { Component } from 'react';
import { Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Radio,
  InputGroup,
  Button
} from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class InsuranceForm extends Component {
  render() {
    return (
      <form>

        <Form inline>
          <FormGroup>
            <InputGroup>
                <InputGroup.Button>
                  <Button>From</Button>
                </InputGroup.Button>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          {' '}
          <FormGroup>
            <InputGroup>
                <InputGroup.Button>
                  <Button>To</Button>
                </InputGroup.Button>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <br />

        <FieldGroup
          id="region"
          type="text"
          label="Region you're visiting"
          placeholder="Enter region name"
        />

        <FieldGroup
          id="numberOfPersons"
          type="number"
          label="Number of persons travelling"
          placeholder="Enter number of persons travelling with you"
        />

        <FormGroup>
          <ControlLabel>Age range of your group</ControlLabel>{' '}
          <Radio name="radioGroup" inline>
            under 18
          </Radio>
          {' '}
          <Radio name="radioGroup" inline checked>
            18 - 60 years old
          </Radio>
          <Radio name="radioGroup" inline>
            over 60
          </Radio>
        </FormGroup>

      </form>
    );
  }
}

export default InsuranceForm;
