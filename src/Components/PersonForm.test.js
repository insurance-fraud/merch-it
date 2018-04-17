import React from 'react';
import { shallow } from 'enzyme';
import PersonForm from './PersonForm';

describe('PersonForm', () => {
  it('renders without crashing', () => {
    const component = shallow(<PersonForm />);
    expect(component).toBeDefined();
  });
});
