import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/auth';
import * as notificationActionCreators from '../actions/notifications';
import _ from 'lodash';
//import noty from 'noty';

class Root extends Component {
    constructor(props){
        super(props);
    }

    newNotificationReceived = (data) => {
        const { dispatch } = this.props;
        const message = JSON.parse(data);
        dispatch(NotificationActions.notificationReceived(message));

        /*var n = noty({
            text: 'NOTY - a jquery notification library!',
            animation: {
                open: 'animated bounceInLeft', // Animate.css class names
                close: 'animated bounceOutLeft' // Animate.css class names
            }
        });*/
    };

    componentWillMount(){
        let {dispatch, config, auth, location} = this.props;
        let activeRouteName = (auth.redirectRoute) ? auth.redirectRoute : location.pathname;

        if(auth.userAuthenticated) {
            Notifications.connect((data) => {});
            Notifications.subscribe("system.notification", this.newNotificationReceived);

            dispatch(notificationActionCreators.loadSystemNotifications());
        }

        let defaultRoutePath = _.result(_.find(config.routes, function(route){
            return route.default === 'true';
        }), 'path');

        defaultRoutePath = defaultRoutePath.startsWith("/") ? defaultRoutePath : "/" + defaultRoutePath;  
        dispatch(authActionCreators.setDefaultRoute(defaultRoutePath));
        
        if (activeRouteName === '/login' || activeRouteName ==='/unknown' ||  activeRouteName === '/' || activeRouteName === null) {
            activeRouteName = defaultRoutePath;
        }
        
        dispatch(authActionCreators.setRedirectRoute(activeRouteName));
        dispatch(authActionCreators.isAuthenticated());
    }
    render(){
        const { children, auth, router, notify, config, dispatch } = this.props;
        let authActions = bindActionCreators(authActionCreators, dispatch);
        let notificationActions = bindActionCreators(notificationActionCreators, dispatch);
        
        return (
            <div>
                {children && React.cloneElement(children, {auth: auth, router: router, config: config, notify: notify, authActions: authActions, notificationActions: notificationActions})}
            </div>
        );
    }
}

function mapStateToProps(state){    
    var clientProp = {};
    for(var prop in state){
        if(prop != "smith" && prop != "router"){
            clientProp = state[prop];
        }
    }
    return {
        auth: state.smith.auth,
        notify: state.smith.notify,
        router: state.router,
        config: clientProp.config
    }
}

export default connect(mapStateToProps)(Root);