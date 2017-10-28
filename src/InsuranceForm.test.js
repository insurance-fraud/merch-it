import React from 'react';
import { shallow } from 'enzyme';
import InsuranceForm from './InsuranceForm';

describe('InsuranceForm', () => {
  it('renders without crashing', () => {
    const component = shallow(<InsuranceForm />);
    expect(component).toBeDefined();
  });
})
