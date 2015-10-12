import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createHashHistory';
import createRoutes from '../routes';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducer';

export default function configureStore(routes, routeComponents) {    

    const createStoreWithMiddleware = compose(
               applyMiddleware(thunkMiddleware),
               reduxReactRouter({ routes: createRoutes(routes, routeComponents), createHistory }),
               applyMiddleware(createLogger()),
               devTools()
        )(createStore);
    
    return createStoreWithMiddleware(rootReducer);
}

//export default function configureStore() {    
//    const createStoreWithMiddleware = compose(
//               applyMiddleware(thunkMiddleware),
//               reduxReactRouter({ createHistory }),
//               applyMiddleware(createLogger()),
//               devTools()
//        )(createStore);
    
//    return createStoreWithMiddleware(rootReducer);
//}