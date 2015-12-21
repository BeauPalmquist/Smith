import React from 'react';    
import _ from 'lodash';
import {Link} from 'react-router';
    
class AppNav extends React.Component{   
    constructor(props){
        super(props);
    }
    render(){
    var navs = [];
    let {user, config, currentLocation} = this.props;        
    var username = user ? user.FullName : "Unknown User";
    if(this.props.config.routes){
        var keyCount = 0;
            
        _.forEach((config.routes), function(route) {
                
            let propHandler = route.path.toLowerCase().startsWith("/") ? route.path.toLowerCase() : "/" +  route.path.toLowerCase();
            var userHasNavPermissions = true;
            if(user){
                var userRoutePermissions = user.RoutePermissions;
                var clientRoutePermissions = _.filter(config.routePermissions, function(routePermission){
                    return routePermission.routeName === route.path;
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

                let displayNav = (route.displayInNav === undefined || route.displayInNav === null || route.displayInNav === true);

                if((displayNav) && (route.navTitle && route.navTitle !== "") && userHasNavPermissions === true){
                    let navKey = "nav_" + (keyCount+1);
                    keyCount++;
                    navs.push(<li key={navKey} className="list-title">{route.navTitle}</li>);
                    let childRoutes = [];
                    let childCount = (route.routes) ? route.routes.length : 0;
                    if(route.routes && childCount > 0) {
                        for(let k=0; k<route.routes.length; k++){
                            let childRoute = route.routes[k];
                            let childNavKey = "ChildNavKey_" + childRoute.path;
                            childRoutes.push(<li key={childNavKey}><Link to={childRoute.path}>{childRoute.navTitle}</Link></li>);
                        }
                    }

                    if(route.image.type === "image"){
                        if(childRoutes.length > 0){
                            navs.push(<li key={"Menu_" + navKey}><Link to={route.path}><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span></Link><ul>{childRoutes}</ul></li>);
                        }
                        else{
                            navs.push(<li key={"Menu_" + navKey}><Link to={route.path}><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span></Link>{childRoutes}</li>);
                        }
                    }
                    else{
                        if(childRoutes.length > 0){
                            navs.push(<li key={"Menu_" + navKey}><Link to={route.path}><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span></Link><ul>{childRoutes}</ul></li>);
                        }
                        else{
                            navs.push(<li key={"Menu_" + navKey}><Link to={route.path}><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span></Link>{childRoutes}</li>);
                        }
                    }                                             
                }
            }
        });
    }

    return (
            <aside className="iconic-leftbar">
                <div className="iconic-aside-container">
                    <ul className="list-accordion">
                        {navs}
                    </ul>
                </div>
            </aside>
        );
    }
}

export default AppNav;