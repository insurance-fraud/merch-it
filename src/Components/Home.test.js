import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home />);
    expect(component).toBeDefined();
  });
});
