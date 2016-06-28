import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import createRoutes from '../routes';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import smithReducers from '../reducers/reducer';
import { routerStateReducer as router } from 'redux-router';

export default function configureStore(clientReducers, includeDevTools, clientMiddlewares) {
    if (!clientMiddlewares instanceof Array) {
        throw new Error('clientMiddlewares parameter must be an instance of Array');
    }

    const configReducer = clientReducers(undefined, 'CLIENT/LOAD_CONFIG');
    const config = configReducer.config;

    let createStoreWithMiddleware;
    if (includeDevTools) {
        createStoreWithMiddleware = compose(
               applyMiddleware(thunkMiddleware),
               reduxReactRouter({ routes: createRoutes(config.routes), createHistory }),
               applyMiddleware(createLogger()),
               applyMiddleware(...clientMiddlewares),
               window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    } else {
        createStoreWithMiddleware = compose(
               applyMiddleware(thunkMiddleware),
               reduxReactRouter({ routes: createRoutes(config.routes), createHistory }),
               applyMiddleware(...clientMiddlewares)
        )(createStore);
    }

    const reducers = { smith: smithReducers, router };
    reducers[config.appName] = clientReducers;
    const allReducers = combineReducers(reducers);

    return createStoreWithMiddleware(allReducers);
}
