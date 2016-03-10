import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/auth';
import * as notificationActionCreators from '../actions/notifications';
import Notifications from '../common/js/forge/support/notifications';

class Root extends Component {
    componentWillMount() {
        const { dispatch, config, auth, location } = this.props;
        let activeRouteName = (auth.redirectRoute) ? auth.redirectRoute : location.pathname;

        if (auth.userAuthenticated) {
            Notifications.connect(() => {});

            dispatch(notificationActionCreators.loadSystemNotifications());
        }

        const defaultRoute = config.routes.find((route) => route.default === 'true');
        const defaultRoutePath = defaultRoute.path.startsWith('/') ? defaultRoute.path : `/${defaultRoute.path}`;
        dispatch(authActionCreators.setDefaultRoute(defaultRoutePath));

        if (activeRouteName === '/login' || activeRouteName === '/unknown' || activeRouteName === '/' || activeRouteName === null) {
            activeRouteName = defaultRoutePath;
        }

        dispatch(authActionCreators.setRedirectRoute(activeRouteName));
        dispatch(authActionCreators.isAuthenticated());
    }
    render() {
        const { children, auth, router, notify, config, dispatch } = this.props;
        const authActions = bindActionCreators(authActionCreators, dispatch);
        const notificationActions = bindActionCreators(notificationActionCreators, dispatch);

        return (
            <div>
                {children && React.cloneElement(children, { auth: auth, router: router, config: config, notify: notify, authActions: authActions, notificationActions: notificationActions })}
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
        router: state.router,
        config: clientProp.config
    };
}

Root.propTypes = {
    auth: React.PropTypes.object.isRequired,
    notify: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func,
    children: React.PropTypes.object
};

export default connect(mapStateToProps)(Root);
