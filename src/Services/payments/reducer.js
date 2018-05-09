import { ATTEMPT_PAYMENT_FAIL, ATTEMPT_PAYMENT_SUCCESS } from './actions';

const initialState = {
  email: undefined,
  amount: undefined,
  errors: undefined
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_PAYMENT_SUCCESS:
      return { ...state, email: action.email, amount: action.amount };
    case ATTEMPT_PAYMENT_FAIL:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
