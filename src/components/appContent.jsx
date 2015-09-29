import React from 'react';
import {RouteHandler} from 'react-router';
import Unknown from './appUnknown';
import _ from 'lodash';

class AppContent extends React.Component{
    constructor(props){
        super(props);
        this.isUserPermitted = this.isUserPermitted.bind(this);
    }
    isUserPermitted(){
        var userHasNavPermissions = true;
        if(this.props.user.profile){
            var currentRoutes = this.context.router.getCurrentRoutes();
            var transitionRoute = currentRoutes[currentRoutes.length-1];
            var userRoutePermissions = this.props.user.profile.RoutePermissions;
            var clientRoutePermissions = _.filter(this.props.config.routePermissions, function(routePermission){
                return routePermission.routeName === transitionRoute.name;
            });
                    
            _.forEach(clientRoutePermissions, function(clientRoutePermission){
                var requiredPermissions = clientRoutePermission.requiredPermissions;
                if(requiredPermissions){
                    var permissionCount = 0;
                    _.forEach(requiredPermissions, function(requiredPermission){
                        if(_.includes(userRoutePermissions, requiredPermission)){
                            permissionCount++;
                        }
                    });
                            
                    userHasNavPermissions = permissionCount === requiredPermissions.length;
                }                        
            });
        }
        return userHasNavPermissions;
    }
    render() {
        let userPermitted = this.isUserPermitted();
        let contentToRender = userPermitted ? (<RouteHandler {...this.props}/>) : (<Unknown  {...this.props} />);
        if(!userPermitted){   
            var currentRoutes = this.context.router.getCurrentRoutes();
            var transitionRoute = currentRoutes[currentRoutes.length-2];
            this.context.router.transitionTo(transitionRoute.path);
        }
    return (
            <div>
                {contentToRender}
            </div>
        );        
    }
}

AppContent.contextTypes = {    
    router: React.PropTypes.func.isRequired
};

export default AppContent;