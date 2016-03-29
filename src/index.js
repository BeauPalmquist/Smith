import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './stores/configureStore';
import applyPolys from './polyfills';
import AjaxOptions from './common/js/forge/support/ajaxOptions';
import ClientAction from './common/js/forge/services/clientAction';
import Notification from './common/js/forge/services/notification';
import Permission from './common/js/forge/services/permission';
import Role from './common/js/forge/services/role';
import Token from './common/js/forge/services/token';
import User from './common/js/forge/services/user';
import UserSession from './common/js/forge/services/userSession';

export default function forgeApp(clientReducers, root, includeDevTools = false, forgeProxyBaseUri = null) {
    applyPolys();
    const store = configureStore(clientReducers, includeDevTools);

    AjaxOptions.setOnRejected(xhr => {
        if (xhr.status === 401) {
            window.location.reload();
        }
    });

    if (forgeProxyBaseUri) {

        const proxyOptions = { baseUri: forgeProxyBaseUri };

        ClientAction.setOptions(proxyOptions);
        Notification.setOptions(proxyOptions);
        Permission.setOptions(proxyOptions);
        Role.setOptions(proxyOptions);
        Token.setOptions(proxyOptions);
        User.setOptions(proxyOptions);
        UserSession.setOptions(proxyOptions);
    }

    render(
        (<Provider store={store}>
            <ReduxRouter />
        </Provider>),
        document.getElementById(root)
    );
}
