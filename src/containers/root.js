import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isAuthenticated, setRedirectRoute, setDefaultRoute } from '../reducers/auth';
import _ from 'lodash';

class Root extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let {dispatch, config, auth, location} = this.props;
        let activeRouteName = (auth.redirectRoute) ? auth.redirectRoute : location.pathname;
        
        let defaultRoutePath = _.result(_.find(config.routes, function(route){
            return route.default === 'true';
        }), 'path');

        defaultRoutePath = defaultRoutePath.startsWith("/") ? defaultRoutePath : "/" + defaultRoutePath;  
        dispatch(setDefaultRoute(defaultRoutePath));
        
        if (activeRouteName === '/login' ||  activeRouteName === '/' || activeRouteName === null) {
            activeRouteName = defaultRoutePath;
        }
        
        dispatch(setRedirectRoute(activeRouteName));
        dispatch(isAuthenticated(config.appName));
    }
    render(){
        const { children, auth, router, notify, config, dispatch } = this.props;
        
        return (
            <div>
                {children && React.cloneElement(children, {auth: auth, router: router, config: config, notify: notify, dispatch: dispatch})}
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