import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import applyPolys from './polyfills';
import ClientAction from './forge-proxies/services/clientAction';
import Notification from './forge-proxies/services/notification';
import Permission from './forge-proxies/services/permission';
import Role from './forge-proxies/services/role';
import Token from './forge-proxies/services/token';
import User from './forge-proxies/services/user';
import UserSession from './forge-proxies/services/userSession';
import Notifications from './forge-proxies/support/notifications';
import { Router, browserHistory } from 'react-router';
import createRoutes from './routes';
import withFeatureFlagImported from './higherOrderComponents/withFeatureFlag';

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

export const withFeatureFlag = withFeatureFlagImported;
