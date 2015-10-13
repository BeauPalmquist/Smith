import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route, IndexRoute, Redirect } from 'react-router';
import configureStore from './stores/configureStore';
import Root from './containers/root'
import Login from './containers/login';

export default function forgeApp(clientReducers, clientComponents, root){    
    const store = configureStore(clientReducers, clientComponents);    

    render(
        <Provider store={store}>
            <ReduxRouter />
        </Provider>,
        document.getElementById(root)
    );
        
    require('./utils/createDevToolsWindow')(store);    
}