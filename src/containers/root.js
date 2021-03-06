﻿import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/auth';
import * as notificationActionCreators from '../actions/notifications';

class Root extends Component {
    componentWillMount() {
        const { dispatch, config, auth } = this.props;
        let activeRouteName = (auth.redirectRoute) ? auth.redirectRoute : location.pathname;

        const defaultRoute = config.routes.find((route) => route.default === 'true');
        const defaultRoutePath = defaultRoute.path.startsWith('/') ? defaultRoute.path : `/${defaultRoute.path}`;
        dispatch(authActionCreators.setDefaultRoute(defaultRoutePath));

        if (activeRouteName === '/login' || activeRouteName === '/unknown' || activeRouteName === '/' || activeRouteName === null) {
            activeRouteName = defaultRoutePath;
        }

        dispatch(authActionCreators.setRedirectRoute(activeRouteName));
        dispatch(authActionCreators.isAuthenticated(config.beforeLoginRedirectPromise));
    }

    render() {
        const { children, auth, notify, config, dispatch } = this.props;
        const authActions = bindActionCreators(authActionCreators, dispatch);
        const notificationActions = bindActionCreators(notificationActionCreators, dispatch);

        return (
            <div ref="root">
                {children && React.cloneElement(children, { auth: auth, config: config, notify: notify, authActions: authActions, notificationActions: notificationActions })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    let clientProp = {};
    for (const prop in state) {
        if (prop !== 'smith' && prop !== 'router') {
            clientProp = state[prop];
        }
    }
    return {
        auth: state.smith.auth,
        notify: state.smith.notify,
        config: clientProp.config
    };
}

Root.propTypes = {
    auth: React.PropTypes.object.isRequired,
    notify: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func,
    children: React.PropTypes.object
};

export default connect(mapStateToProps)(Root);
