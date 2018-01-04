import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authenticationReducer(state = initialState.authentication, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        status: types.LOGIN_REQUEST,
        isAuthenticated: false,
        errors: [],
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        status: types.LOGIN_SUCCESS,
        isAuthenticated: true,
        errors: [],
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        status: types.LOGIN_FAILURE,
        isAuthenticated: false,
        errors: action.errors,
      });
    case types.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        status: types.LOGOUT_REQUEST,
        isAuthenticated: false,
        errors: [],
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        status: types.LOGOUT_SUCCESS,
        isAuthenticated: false,
        errors: [],
      });
    default:
      return state;
  }
}
