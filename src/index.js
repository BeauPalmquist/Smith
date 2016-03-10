import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './stores/configureStore';
import applyPolys from './polyfills';
import AjaxOptions from './common/js/forge/support/ajaxOptions';

export default function forgeApp(clientReducers, root, includeDevTools = false) {
    applyPolys();
    const store = configureStore(clientReducers, includeDevTools);

    AjaxOptions.setOnRejected(xhr => {
        if (xhr.status === 401) {
            window.location.reload();
        }
    });

    render(
        (<Provider store={store}>
            <ReduxRouter />
        </Provider>),
        document.getElementById(root)
    );
}
