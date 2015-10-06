import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Login from './containers/login';
import Unknown from './containers/unknown';

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
            } 
            else {
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

export default function(config, routeComponents, root){
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