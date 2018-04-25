import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { shallow, mount } from 'enzyme';
import InsuranceForm from './Components/InsuranceForm';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureStore([thunk]);

describe('App', () => {
  it('renders without crashing', () => {
    const store = mockStore({});
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.text().length).not.toEqual(0);
  });

  it('renders InsuranceForm', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(InsuranceForm).length).toEqual(1);
  });
});
