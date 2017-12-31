import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.authentication, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        user: action.user
      });
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      });
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors
      });
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.user
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errors: ''
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errors: action.errors
      });
    case types.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });
    default:
      return state;
  }
}