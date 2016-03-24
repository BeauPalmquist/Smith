import { combineReducers } from 'redux';
import config from './config';
import toolbar from './reducers/Toolbar';

// import reducer, action, actiontypes ducks here

const rootReducer = combineReducers({
    config,
    toolbar
});

export default rootReducer;
