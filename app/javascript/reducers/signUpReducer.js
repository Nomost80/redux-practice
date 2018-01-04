import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signUpReducer(state = initialState.signUp, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        status: types.SIGNUP_REQUEST,
        errors: [],
      });
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        status: types.SIGNUP_SUCCESS,
        errors: [],
      });
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        status: types.SIGNUP_FAILURE,
        errors: action.errors,
      });
    default:
      return state;
  }
}
