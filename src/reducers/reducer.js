import { combineReducers } from 'redux';
import auth  from './auth';
import notify from './notify';

const rootReducer = combineReducers({
    auth,
    notify
});

export default rootReducer;