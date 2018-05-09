import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { paymentReducer } from './Services/payments/reducer';

export default combineReducers({
  routing: routerReducer,
  payment: paymentReducer
});
