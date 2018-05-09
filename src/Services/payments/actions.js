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

const attemptPaymentFail = errors => {
  return {
    type: ATTEMPT_PAYMENT_FAIL,
    errors
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
      .catch(({ response }) => {
        const data = response.data;
        console.log(response);
        console.log(data);

        const errors = data.errors;

        dispatch(push('/error'));
        dispatch(attemptPaymentFail(errors));
      });
  };
};
