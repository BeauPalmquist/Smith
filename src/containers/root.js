import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//function getRootAppState(){
//    return {
//        user:{
//            isUnknown: AppUserStore.getUserIsUnknown(),
//            isAuthenticated: AppUserStore.getUserAuthenticationStatus(),
//            profile: AppUserStore.getUserProfile()
//        },
//        login:{
//            errorMessage: AppUserStore.getLoginErrorMessage(),
//            returnUrl: AppUserStore.getRedirectRoute()
//        }
//    };
//}
class Root extends Component {
    constructor(props){
        super(props);
        //this.state = getRootAppState();
    }
    componentWillMount(){
        //var activeRouteName = '';
        //if(this.context.router.getCurrentPathname()) { activeRouteName = this.context.router.getCurrentPathname();}
        //if (activeRouteName === '/login' || activeRouteName === '/unknown' || activeRouteName === null) {activeRouteName = 'home';}
        //AppUserActions.setRedirectRoute(activeRouteName);
    }
    componentDidMount(){
        //AppUserStore.addChangeListener(this.onChange);
        //AppUserActions.setUserAuthenticationStatus();
    }
    componentWillUnmount(){
        //AppUserStore.removeChangeListener(this.onChange);
    }
    //onChange(){
    //    this.setState(getRootAppState());
    //}
    render(){
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

function select(state){
    return {
        router: state.router
    }
}

export default connect(select)(Root);