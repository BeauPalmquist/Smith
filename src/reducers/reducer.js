import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { auth } from './auth';

// import reducer, action, actiontypes ducks here

const rootReducer = combineReducers({
    auth,
    router
});

export default rootReducer;