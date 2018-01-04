/* Dans le cas ou par la suite il y aurait plusieurs reducers */
import { combineReducers } from 'redux';
import rides from './rideReducer';
import signup from './signUpReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  rides,
  signup,
  auth,
});

export default rootReducer;
