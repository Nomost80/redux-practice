import * as types from './actionTypes';
import userApi from '../api/userApi';

export function signUpRequest(user) {
  return {
    type: types.SIGNUP_REQUEST,
    isFetching: true,
    user
  };
}

export function signUpSuccess(user) {
  return {
    type: types.SIGNUP_SUCCESS,
    isFetching: false,
    user
  };
}

export function signUpFailure(errors) {
  return {
    type: types.SIGNUP_FAILURE,
    isFetching: false,
    errors
  };
}

export function signUp(user) {
  return dispatch => {
    dispatch(signUpRequest(user));
    userApi.signUp(user)
      .then(response => dispatch(signUpSuccess(user)))
      .catch(err => dispatch(signUpFailure(err)));
  };
}

export function loginRequest(user) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    user
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user,
  };
}

export function loginFailure(errors) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    errors
  };
}

export function login(user) {
  return dispatch => {
    dispatch(loginRequest(user));
    userApi.login(user)
      .then(({jwt}) => {
        localStorage.setItem('access_token', jwt);
        dispatch(loginSuccess(user));
      })
      .catch(err => dispatch(loginFailure(err)));
  };
}

export function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export function logout() {
  return dispatch => {
    dispatch(logoutRequest());
    localStorage.removeItem('access_token');
    dispatch(logoutSuccess());
  }
}