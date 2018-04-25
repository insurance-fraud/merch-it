import { push } from 'react-router-redux';
import axios from 'axios';

export const ATTEMPT_PAYMENT_SUCCESS = 'ATTEMPT_PAYMENT_SUCCESS';
export const ATTEMPT_PAYMENT_FAIL = 'ATTEMPT_PAYMENT_FAIL';

const attemptPaymentSuccess = (email, amount) => {
  return {
    type: ATTEMPT_PAYMENT_SUCCESS,
    email,
    amount
  };
};

const attemptPaymentFail = error => {
  return {
    type: ATTEMPT_PAYMENT_FAIL,
    error
  };
};

export const postAttemptPayment = (email, amount) => {
  return dispatch => {
    axios
      .post('http://boxbox:3001/payments/attempt_payment', {
        payment: { email: 'nikolaseap@gmail.com', amount: 1000 }
      })
      .then(resp => {
        console.log(resp);

        const payment = resp.data;

        dispatch(push('/success'));
        dispatch(attemptPaymentSuccess(payment));
      })
      .catch(resp => {
        console.log(resp);

        dispatch(push('/error'));
        dispatch(attemptPaymentFail(resp.data));
      });
  };
};
