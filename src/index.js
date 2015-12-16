import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './stores/configureStore';
import devTools from './utils/createDevToolsWindow';
import ApplyPolyfills from './polyfills';

export default function forgeApp(clientReducers, root, includeDevTools = false){    
    ApplyPolyfills();
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