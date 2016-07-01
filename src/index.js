import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import applyPolys from './polyfills';
import ClientAction from './common/js/forge/services/clientAction';
import Notification from './common/js/forge/services/notification';
import Permission from './common/js/forge/services/permission';
import Role from './common/js/forge/services/role';
import Token from './common/js/forge/services/token';
import User from './common/js/forge/services/user';
import UserSession from './common/js/forge/services/userSession';
import Notifications from './common/js/forge/support/notifications';
import { Router, browserHistory } from 'react-router';
import createRoutes from './routes';

export default function forgeApp(
    clientReducers,
    root,
    includeDevTools = false,
    forgeProxyBaseUri = null,
    clientMiddlewares = []
) {
    applyPolys();
    const store = configureStore(clientReducers, includeDevTools, clientMiddlewares);

    if (forgeProxyBaseUri) {

        const proxyOptions = { baseUri: forgeProxyBaseUri };

        ClientAction.setOptions(proxyOptions);
        Notification.setOptions(proxyOptions);
        Permission.setOptions(proxyOptions);
        Role.setOptions(proxyOptions);
        Token.setOptions(proxyOptions);
        User.setOptions(proxyOptions);
        UserSession.setOptions(proxyOptions);

        if (typeof Notifications.setOptions === 'function') {
            Notifications.setOptions(proxyOptions);
        }
    }

    const configReducer = clientReducers(undefined, 'CLIENT/LOAD_CONFIG');
    const config = configReducer.config;
    const routes = createRoutes(config.routes);

    render(
        (<Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>),
        document.getElementById(root)
    );
}
