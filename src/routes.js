import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Root from './containers/root'
import App from './containers/app';
import Login from './containers/login';
import Unknown from './containers/unknown';

// Recursively builds a set of react routes
function forgeChildRoutes(routes){
    let reactRoutes = [];
    if(routes){
        let defaultRouteSet = false;
        for(var i=0; i < routes.length; i++){
            let route = routes[i];
            let component = route.component;
            let routeKey = "Route_" + route.path + "_" + i;

            
            if(route.routes && route.routes.length > 0){
                var childRoutes = forgeChildRoutes(route.routes, routeComponents);
                reactRoutes.push(<Route key={routeKey} path={route.path} component={component}>{childRoutes}</Route>);
            } 
            else {
                reactRoutes.push(<Route key={routeKey} path={route.path} component={component} />);
            }

            // Add paramRoutes for this component
            if(route.paramRoutes){
                let paramRoutes = route.paramRoutes;
                for (let j=0; j < paramRoutes.length; j++) {
                    let paramRouteKey = "ParamRoute_" + paramRoutes[j].path + "_" + j;
                    let paramRoute = paramRoutes[j];
                    if(paramRoute){                        
                        var paramComponent = paramRoute.component ? paramRoute.component : route.component;
                        reactRoutes.push(<Route key={paramRouteKey} path={paramRoute.path} component={paramComponent} />);
                    }
                }
            }

            // Add redirects for this route
            if(route.redirects){
                let redirects = route.redirects;
                for(let j=0; j < redirects.length; j++){
                    let redirectRouteKey = "RedirectRoute_" + route.path + "_" + j;
                    let redirectRoute = redirects[j];
                    reactRoutes.push(<Redirect key={redirectRouteKey} from={redirectRoute.from} to={redirectRoute.to} />);
                }
            }

            // Add default route if necessary
            if((route.default === "true" || routes.length === (i+1)) && !defaultRouteSet){
                let defaultRouteKey = "DefaultRoute_" + route.path + "_" + i;
                reactRoutes.push(<IndexRoute key={defaultRouteKey} component={component} />);
                route.default = 'true';
                defaultRouteSet = true;
            }
        }
    }
    return reactRoutes;
}

export default function(routes, routeComponents){
    let reactRoutes = forgeChildRoutes(routes, routeComponents);

    let navRoutes = (
        <Route path="/" component={Root}>
            <Route path="unknown" component={Unknown} />
            <Route path="login" component={Login} />
            <Route path="/" component={App}>
                {reactRoutes}
            </Route>
            <IndexRoute component={App} />
        </Route>
    );

    return navRoutes;
}