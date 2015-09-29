import React from 'react';
import Router from 'react-router';
import {Route, RouteHandler, DefaultRoute, Redirect} from 'react-router';
import App from './components/app';
import Login from './components/appLogin';
import Unknown from './components/appUnknown';
import AppUserStore from './stores/appUserStore';
import AppUserActions from './actions/appUserActions';

// Recursively builds a set of react routes
function forgeChildRoutes(routes, routeComponents){
    let reactRoutes = [];
    if(routes){
        let defaultRouteSet = false;
        for(var i=0; i < routes.length; i++){
            let route = routes[i];
            let handler = routeComponents[route.handler];
            let routeKey = "Route_" + route.handler + "_" + i;

            if(route.routes && route.routes.length > 0){
                var childRoutes = forgeChildRoutes(route.routes, routeComponents);
                reactRoutes.push(<Route key={routeKey} path={route.path} name={route.name} handler={handler}>{childRoutes}</Route>);
            } else {
                reactRoutes.push(<Route key={routeKey} path={route.path} name={route.name} handler={handler} />);
            }

            // Add paramRoutes for this component
            if(route.paramRoutes){
                let paramRoutes = route.paramRoutes;
                for (let j=0; j < paramRoutes.length; j++) {
                    let paramRouteKey = "ParamRoute_" + route.handler + "_" + j;
                    let paramRoute = paramRoutes[j];
                    if(paramRoute){
                        var paramRouteHandler = paramRoute.handler ? paramRoute.handler : handler;   
                        var paramHandler = routeComponents[paramRouteHandler];
                        reactRoutes.push(<Route key={paramRouteKey} path={paramRoute.path} name={paramRoute.name} handler={paramHandler} />);
                    }
                }
            }

            // Add redirects for this route
            if(route.redirects){
                let redirects = route.redirects;
                for(let j=0; j < redirects.length; j++){
                    let redirectRouteKey = "RedirectRoute_" + route.handler + "_" + j;
                    let redirectRoute = redirects[j];
                    reactRoutes.push(<Redirect key={redirectRouteKey} from={redirectRoute.from} to={redirectRoute.to} />);
                }
            }

            // Add default route if necessary
            if((route.default === "true" || routes.length === (i+1)) && !defaultRouteSet){
                let defaultRouteKey = "DefaultRoute_" + route.handler + "_" + i;
                reactRoutes.push(<DefaultRoute key={defaultRouteKey} path={route.path} handler={handler} />);
                route.default = 'true';
                defaultRouteSet = true;
            }
        }
    }
    return reactRoutes;
}

function forgeRoutes(config, routeComponents, root){
    let reactRoutes = forgeChildRoutes(config.routes, routeComponents);

    let routes = (
        <Route path="/" handler={root}>
            <Route name="unknown" handler={Unknown} />
            <Route name="login" handler={Login} />
            <Route name="home" path="/" handler={App}>
                {reactRoutes}
            </Route>
            <DefaultRoute handler={App} />
        </Route>
    );

    return routes;
}

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
    class ForgeApp extends React.Component {
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