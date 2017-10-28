import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders InsuranceForm', () => {
    const component = shallow(<App />);
    expect(component.find('InsuranceForm').length).toEqual(1);
  })
})
