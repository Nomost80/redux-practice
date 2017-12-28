import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rideReducer(state = initialState.rides, action) {
  switch (action.type) {
    case types.LOAD_RIDES_SUCCESS:
      return action.rides;

    case types.CREATE_RIDE_SUCCESS:
      /* On renvoie un nouveau tableau comprenant le nouvel état */
      return [...state, Object.assign({}, action.ride)];

    case types.UPDATE_RIDE_SUCCESS:
      return [...state.filter(ride => ride.id !== action.ride.id), Object.assign({}, action.ride)];

    case types.DELETE_RIDE_SUCCESS:
      return [...state.filter(ride => ride.id !== action.ride.id)];

    default:
      return state;
  }
}
