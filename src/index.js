import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './stores/configureStore';
import Root from './containers/root'
import Login from './containers/login';
import devTools from './utils/createDevToolsWindow';

export default function forgeApp(clientReducers, root, includeDevTools = false){    
    const store = configureStore(clientReducers, includeDevTools);    

    ReactDOM.render(
        (<Provider store={store}>
            <ReduxRouter />
        </Provider>),
        document.getElementById(root)
    );

    if(includeDevTools){
        devTools(store);    
    }
}