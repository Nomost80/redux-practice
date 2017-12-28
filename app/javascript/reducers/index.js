/* Dans le cas ou par la suite il y aurait plusieurs reducers */
import {combineReducers} from 'redux';
import rides from './rideReducer';

const rootReducer = combineReducers({
    rides
});

export default rootReducer;