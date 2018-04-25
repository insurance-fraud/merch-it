import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './Home';

describe('ErrorPage', () => {
  it('renders without crashing', () => {
    const component = shallow(<ErrorPage />);
    expect(component).toBeDefined();
  });
});
