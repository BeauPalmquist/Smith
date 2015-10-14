import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isAuthenticated, setRedirectRoute } from '../reducers/auth';

class Root extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        var activeRouteName = location.pathname;        
        if (activeRouteName === '/login' || activeRouteName === '/unknown' || activeRouteName === null) {activeRouteName = '/';}

        let {dispatch} = this.props;
        dispatch(setRedirectRoute(activeRouteName));
    }
    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(isAuthenticated("SmithClient"));
    }
    render(){
        const { children, auth, router, notify, config, dispatch } = this.props;
        //        {children && React.cloneElement(children, {auth: auth, router: router, config: config, notify: notify, dispatch: dispatch})}
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