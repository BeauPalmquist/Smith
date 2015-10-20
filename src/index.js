import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route, IndexRoute, Redirect } from 'react-router';
import configureStore from './stores/configureStore';
import Root from './containers/root'
import Login from './containers/login';

export default function forgeApp(clientReducers, root, includeDevTools = false){    
    const store = configureStore(clientReducers, includeDevTools);    

    render(
        <Provider store={store}>
            <ReduxRouter />
        </Provider>,
        document.getElementById(root)
    );

    if(includeDevTools){
        require('./utils/createDevToolsWindow')(store);    
    }
}