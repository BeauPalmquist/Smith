import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './stores/configureStore';
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