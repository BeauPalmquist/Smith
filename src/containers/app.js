import React, { Component } from 'react';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createRoutes } from "./routes";

function getRootAppState(){
    return {
        user:{
            isUnknown: AppUserStore.getUserIsUnknown(),
            isAuthenticated: AppUserStore.getUserAuthenticationStatus(),
            profile: AppUserStore.getUserProfile()
        },
        login:{
            errorMessage: AppUserStore.getLoginErrorMessage(),
            returnUrl: AppUserStore.getRedirectRoute()
        }
    };
}

export function forgeApp(config, routeComponents, root){
    class ForgeApp extends Component {
        constructor(props){
            super(props);
            this.state = getRootAppState();
            this.onChange = this.onChange.bind(this);
        }
        componentWillMount(){
            var activeRouteName = '';
            if(this.context.router.getCurrentPathname()) { activeRouteName = this.context.router.getCurrentPathname();}
            if (activeRouteName === '/login' || activeRouteName === '/unknown' || activeRouteName === null) {activeRouteName = 'home';}
            AppUserActions.setRedirectRoute(activeRouteName);
        }
        componentDidMount(){
            AppUserStore.addChangeListener(this.onChange);
            AppUserActions.setUserAuthenticationStatus();
        }
        componentWillUnmount(){
            AppUserStore.removeChangeListener(this.onChange);
        }
        onChange(){
            this.setState(getRootAppState());
        }
        render(){
            return (
                <RouteHandler config={config} user={this.state.user} login={this.state.login} {...this.props} />
            );
            }
    }

    ForgeApp.contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    var routes = forgeRoutes(config, routeComponents, ForgeApp);

    Router.run(routes, function (Handler) {
        React.render(<Handler />, document.getElementById(root));
    });
}