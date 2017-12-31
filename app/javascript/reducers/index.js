/* Dans le cas ou par la suite il y aurait plusieurs reducers */
import {combineReducers} from 'redux';
import rides from './rideReducer';
import auth from './userReducer';

const rootReducer = combineReducers({
  rides,
  auth
});

export default rootReducer;