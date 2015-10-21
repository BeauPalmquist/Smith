import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createHashHistory';
import createRoutes from '../routes';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import smithReducers from '../reducers/reducer';
import { routerStateReducer as router } from 'redux-router';

export default function configureStore(clientReducers, includeDevTools) {    
    let configReducer = clientReducers(undefined, "CLIENT/LOAD_CONFIG");
    let config = configReducer.config;

    let createStoreWithMiddleware;
    if(includeDevTools){ 
        createStoreWithMiddleware = compose(
               applyMiddleware(thunkMiddleware),
               reduxReactRouter({ routes: createRoutes(config.routes), createHistory }),
               applyMiddleware(createLogger()),
               devTools()
        )(createStore);
    }
    else{
        createStoreWithMiddleware = compose(
               applyMiddleware(thunkMiddleware),
               reduxReactRouter({ routes: createRoutes(config.routes), createHistory })
        )(createStore);
    }

    let reducers = { smith: smithReducers, router};
    reducers[config.appName] = clientReducers;
    let allReducers = combineReducers(reducers);
    
    return createStoreWithMiddleware(allReducers);
}