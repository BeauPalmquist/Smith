import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './redux/create';

default export function ForgeApp(config, routeComponents, root){
    const store = configureStore();

    render(
        <Provider store={store}>
           <ReduxRouter />
        </Provider>,
        document.getElementById('root')
    );
    require('./createDevToolsWindow')(store);
}